import { useState } from "react";
import { fetchSpaceFact } from "../services/api";
import FactCard from "../components/FactCard";
import Button from "../components/Button";

const Home = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const newFact = await fetchSpaceFact();
      setFact(newFact);
    } catch (error) {
      console.error(error);
      setFact("⚠️ Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="home">
      <h1>🚀 Space Facts Generator</h1>

      {/* Button Component */}
      <Button onClick={handleClick} disabled={loading} />

      {/* Empty State */}
      {!loading && !fact && <p>Click the button to generate a space fact 🚀</p>}

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Fact Display */}
      {!loading && fact && <FactCard fact={fact} />}
    </div>
  );
};

export default Home;
