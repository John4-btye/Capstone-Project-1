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
        copyright={currentItem.copyright}
      />

      {items.length > 1 && (
        <div className="carousel-buttons">
          <button onClick={prevSlide} className="carousel-btn">
            ⬅ Previous
          </button>

          <span className="carousel-counter">
            {currentIndex + 1} / {items.length}
          </span>

          <button onClick={nextSlide} className="carousel-btn">
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
