const FactCard = ({ title, explanation, image, mediaType }) => {
  return (
    <div className="fact-card">
      <h2>{title}</h2>

      {mediaType === "image" && image && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      )}

      {mediaType === "video" && image && (
        <iframe
          src={image}
          title={title}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          style={{ marginTop: "10px" }}
        />
      )}

      <p style={{ marginTop: "15px" }}>{explanation}</p>
    </div>
  );
};

export default FactCard;
