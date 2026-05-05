import { useState } from "react";
import { fetchSpaceFact } from "../services/api";
import FactCard from "../components/FactCard";

const Home = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const newFact = await fetchSpaceFact();
    setFact(newFact);
    setLoading(false);
  };

  return (
    <div className="home">
      <h1>🚀 Space Facts Generator</h1>

      <button onClick={handleClick}>Generate Fact</button>

      {loading && <p>Loading...</p>}
      {fact && <FactCard fact={fact} />}
    </div>
  );
};

export default Home;
