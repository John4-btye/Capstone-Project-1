import { useState } from "react";
import { fetchSpaceFact } from "../services/api";
import FactCard from "../components/FactCard";
import Button from "../components/Button";

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

      <Button onClick={handleClick} disabled={loading}></Button>

      {loading && <p>Loading...</p>}
      {fact && <FactCard fact={fact} />}
    </div>
  );
};

export default Home;
