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
  const [error, setError] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await fetchSpaceFact();

      if (!result) {
        throw new Error("Empty response");
      }

      setResults([]);
      setData(result);
      setHasSearched(false);
      setLastQuery("");
    } catch {
      setResults([]);
      setData(null);
      setHasSearched(false);
      setLastQuery("");
      setError(
        "Couldn’t load a space fact right now. Check your connection/API key and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setHasSearched(true);
    setLastQuery(query);

    try {
      const searchResults = await searchSpaceFacts(query);

      setData(null);
      setResults(Array.isArray(searchResults) ? searchResults : []);
    } catch {
      setData(null);
      setResults([]);
      setError(
        "Couldn’t load search results right now. Check your connection/API key and try again.",
      );
    } finally {
      setLoading(false);
    }
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

      {!loading && error && <p className="error-message">{error}</p>}

      {data && (
        <FactCard
          title={data.title}
          explanation={data.explanation}
          image={data.image}
          mediaType={data.mediaType}
          date={data.date}
          copyright={data.copyright}
        />
      )}

      {results.length === 1 && (
        <FactCard
          title={results[0].title}
          explanation={results[0].explanation}
          image={results[0].image}
          mediaType={results[0].mediaType}
          date={results[0].date}
          copyright={results[0].copyright}
        />
      )}

      {results.length > 1 && <Carousel items={results} />}

      {!loading && hasSearched && results.length === 0 && !data && (
        <p className="empty-message">
          No results found for “{lastQuery}”. Try a different keyword.
        </p>
      )}

      {!loading && !hasSearched && results.length === 0 && !data && (
        <div className="welcome-message">
          Welcome to Space Explorer! Discover breathtaking NASA imagery, explore
          distant galaxies, and uncover fascinating facts from across the
          universe.
        </div>
      )}
    </div>
  );
};

export default Home;
