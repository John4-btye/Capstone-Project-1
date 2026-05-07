import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    onSearch(query);
    setQuery("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search galaxies, nebulae, planets, black holes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <button type="submit" className="search-button">
        🔎 Search
      </button>
    </form>
  );
};

export default SearchBar;
