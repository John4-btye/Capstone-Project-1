import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import AlienUFO from "./components/AlienUFO";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      document.documentElement.style.setProperty("--move-x", `${x}px`);
      document.documentElement.style.setProperty("--move-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Animated Background Glow */}
        <div className="space-glow"></div>

        {/* Twinkling Star Layer */}
        <div className="twinkle-layer"></div>

        {/* Floating Space Particles */}
        <div className="space-particles">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Alien UFO */}
        <AlienUFO />

        {/* Shooting Stars */}
        <div className="shooting-star star-1" />
        <div className="shooting-star star-2" />
        <div className="shooting-star star-3" />

        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
