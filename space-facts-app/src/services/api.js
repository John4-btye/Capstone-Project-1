const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchSpaceFact = async () => {
  try {
    const res = await fetch(
      "https://api.api-ninjas.com/v1/facts?category=space",
      {
        headers: {
          "X-Api-Key": API_KEY,
        },
      },
    );

    const data = await res.json();

    if (!data || !data[0] || !data[0].fact) {
      return "No space fact available right now.";
    }

    return data[0].fact;
  } catch (error) {
    console.error("API Error:", error);
    return "⚠️ Unable to fetch space fact. Try again.";
  }
};
