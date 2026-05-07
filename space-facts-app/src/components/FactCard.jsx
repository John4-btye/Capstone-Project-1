const FactCard = ({
  title,
  explanation,
  image,
  mediaType,
  date,
  copyright,
}) => {
  return (
    <div className="fact-card">
      <h2>{title}</h2>

      <p className="fact-date">📅 {date}</p>

      {mediaType === "image" ? (
        <img src={image} alt={title} className="space-image" />
      ) : (
        <iframe
          title={title}
          src={image}
          className="space-video"
          allowFullScreen
        />
      )}

      <p className="fact-description">{explanation}</p>

      <div className="credit-section">
        <p>📸 Credit: {copyright || "NASA / Public Domain"}</p>
      </div>
    </div>
  );
};

export default FactCard;
