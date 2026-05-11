import { useEffect, useState } from "react";
import FactCard from "./FactCard";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemCount = items?.length ?? 0;

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemCount]);

  if (itemCount === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemCount - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1,
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

      {itemCount > 1 && (
        <div className="carousel-buttons">
          <button type="button" onClick={prevSlide} className="carousel-btn">
            ⬅ Previous
          </button>

          <span className="carousel-counter">
            {currentIndex + 1} / {itemCount}
          </span>

          <button type="button" onClick={nextSlide} className="carousel-btn">
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
