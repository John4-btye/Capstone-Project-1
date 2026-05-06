import { useState } from "react";

import { fetchSpaceFact, searchSpaceFacts } from "../services/api";

import Button from "../components/Button";
import FactCard from "../components/FactCard";
import SearchBar from "../components/Searchbar";

const Home = () => {
  const [data, setData] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const result = await fetchSpaceFact();

    setResults([]);
    setData(result);

    setLoading(false);
  };

  const handleSearch = async (query) => {
    setLoading(true);

    const searchResults = await searchSpaceFacts(query);

    setData(null);
    setResults(searchResults);

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>🚀 Space Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="button-wrapper">
        <Button onClick={handleClick} disabled={loading} />
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

      {results.length > 0 && (
        <div className="results-grid">
          {results.map((item, index) => (
            <FactCard
              key={index}
              title={item.title}
              explanation={item.explanation}
              image={item.image}
              mediaType={item.mediaType}
              date={item.date}
            />
          ))}
        </div>
      )}

      {!loading && results.length === 0 && !data && (
        <p className="empty-message">
          Search for planets, nebulae, galaxies, astronauts, black holes, and
          more.
        </p>
      )}
    </div>
  );
};

export default Home;
