import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

jest.mock("./services/api", () => ({
  fetchSpaceFact: jest.fn(),
  searchSpaceFacts: jest.fn(),
}));

describe("App", () => {
  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterAll(() => {
    console.warn.mockRestore();
  });

  beforeEach(() => {
    window.history.pushState({}, "Test", "/");
  });

  test("renders navigation links", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  test("navigates to About page", async () => {
    render(<App />);

    await userEvent.click(screen.getByRole("link", { name: /about/i }));
    expect(
      await screen.findByRole("heading", { name: /about this application/i }),
    ).toBeInTheDocument();
  });

  test('shows "no results" message after an empty search', async () => {
    const { searchSpaceFacts } = require("./services/api");
    searchSpaceFacts.mockResolvedValueOnce([]);

    render(<App />);

    await userEvent.type(
      screen.getByPlaceholderText(/search galaxies/i),
      "zzzz_not_a_real_space_thing",
    );

    await userEvent.click(screen.getByRole("button", { name: /search/i }));

    expect(
      await screen.findByText(/no results found for/i),
    ).toBeInTheDocument();
  });
});
