import { useState } from "react";
import FactCard from "./FactCard";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const currentItem = items[currentIndex];

  return (
    <div className="carousel-container">
      <FactCard
        title={currentItem.title}
        explanation={currentItem.explanation}
        image={currentItem.image}
        mediaType={currentItem.mediaType}
        date={currentItem.date}
      />

      {items.length > 1 && (
        <div className="carousel-controls">
          <button onClick={prevSlide}>⬅ Previous</button>

          <span>
            {currentIndex + 1} / {items.length}
          </span>

          <button onClick={nextSlide}>Next ➡</button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
