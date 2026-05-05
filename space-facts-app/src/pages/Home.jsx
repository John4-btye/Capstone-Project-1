import { useState } from "react";
import { fetchSpaceFact } from "../services/api";
import Button from "../components/Button";
import FactCard from "../components/FactCard";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await fetchSpaceFact();

      if (!result || !result.explanation) {
        throw new Error("Invalid data received");
      }

      setData(result);
    } catch (err) {
      console.error(err);
      setError("⚠️ Failed to load space data. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>🚀 Space Facts Generator</h1>

      <Button onClick={handleClick} disabled={loading} />

      {!loading && !data && !error && (
        <p>Click the button to explore space 🚀</p>
      )}

      {loading && <p>Loading space data...</p>}

      {error && <p>{error}</p>}

      {data && (
        <FactCard
          title={data.title}
          explanation={data.explanation}
          image={data.image}
          mediaType={data.mediaType}
        />
      )}
    </div>
  );
};

export default Home;
