import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import AlienUFO from "./components/AlienUFO";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Animated Alien UFO */}
        <AlienUFO />

        {/* Background Shooting Stars */}
        <div className="shooting-star star-1" />
        <div className="shooting-star star-2" />
        <div className="shooting-star star-3" />

        {/* Navigation */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
