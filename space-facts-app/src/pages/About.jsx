const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">🚀 About This Application</h1>

      <div className="about-card">
        <p className="about-text">
          This application is a <strong>Space Fact Generator</strong>!
        </p>

        <p className="about-text">
          It was created using <strong>JavaScript</strong> and
          <strong> React</strong> inside of an IDE called
          <strong> VSCode</strong>.
        </p>

        <p className="about-text">It contains multiple features like:</p>

        <ul className="about-list">
          <li>🔍 A searchable NASA database</li>
          <li>🎲 Random fact generation</li>
          <li>📅 Exact dates for each article</li>
          <li>🛰️ NASA APOD image exploration</li>
          <li>👽 Animated space visuals and effects</li>
        </ul>

        <p className="about-text">
          All information and imagery is sourced from NASA's public{" "}
          <strong>APOD API</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
