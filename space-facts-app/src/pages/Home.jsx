import { useState } from "react";

import { fetchSpaceFact, searchSpaceFacts } from "../services/api";

import Button from "../components/Button";
import FactCard from "../components/FactCard";
import SearchBar from "../components/Searchbar";
import Carousel from "../components/Carousel";

const Home = () => {
  const [data, setData] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const result = await fetchSpaceFact();

    setResults([]);
    setData(result);
    setHasSearched(false);
    setLastQuery("");

    setLoading(false);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setHasSearched(true);
    setLastQuery(query);

    const searchResults = await searchSpaceFacts(query);

    setData(null);
    setResults(searchResults);

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>🚀 Space Explorer</h1>

      <div className="top-controls">
        <SearchBar onSearch={handleSearch} />

        <div className="button-wrapper">
          <Button onClick={handleClick} disabled={loading} />
        </div>
      </div>

      {loading && <p className="loading">Loading space data...</p>}

      {data && (
        <FactCard
          title={data.title}
          explanation={data.explanation}
          image={data.image}
          mediaType={data.mediaType}
          date={data.date}
        />
      )}

      {results.length > 0 && <Carousel items={results} />}

      {!loading && hasSearched && results.length === 0 && !data && (
        <p className="empty-message">
          No results found for “{lastQuery}”. Try a different keyword.
        </p>
      )}

      {!loading && !hasSearched && results.length === 0 && !data && (
        <div className="welcome-message">
          🚀 Welcome to Space Explorer! Discover breathtaking NASA imagery,
          explore distant galaxies, and uncover fascinating facts from across
          the universe.
        </div>
      )}
    </div>
  );
};

export default Home;
