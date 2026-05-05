const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const fetchSpaceFact = async () => {
  try {
    // Generate random date between 1995 (APOD start) and today
    const start = new Date(1995, 5, 16);
    const end = new Date();

    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    )
      .toISOString()
      .split("T")[0];

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

    return {
      title: "Error",
      explanation: "⚠️ Unable to fetch space data.",
      image: null,
      mediaType: "image",
      date: null,
    };
  }
};
