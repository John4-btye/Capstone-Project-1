const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const generateRandomDate = () => {
  const start = new Date(1995, 5, 16);
  const end = new Date();

  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  return randomDate.toISOString().split("T")[0];
};

export const fetchSpaceFact = async () => {
  try {
    const randomDate = generateRandomDate();

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${randomDate}`,
    );

    const data = await response.json();

    return {
      title: data.title,
      explanation: data.explanation,
      image: data.url,
      mediaType: data.media_type,
      date: data.date,
    };
  } catch (error) {
    console.error("NASA API Error:", error);

    return null;
  }
};

export const searchSpaceFacts = async (query) => {
  try {
    const results = [];

    for (let i = 0; i < 15; i++) {
      const randomDate = generateRandomDate();

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${randomDate}`,
      );

      const data = await response.json();

      const titleMatch = data.title
        ?.toLowerCase()
        .includes(query.toLowerCase());

      const explanationMatch = data.explanation
        ?.toLowerCase()
        .includes(query.toLowerCase());

      if (titleMatch || explanationMatch) {
        results.push({
          title: data.title,
          explanation: data.explanation,
          image: data.url,
          mediaType: data.media_type,
          date: data.date,
        });
      }
    }

    return results;
  } catch (error) {
    console.error("Search Error:", error);

    return [];
  }
};
