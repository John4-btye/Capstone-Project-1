const API_KEY = process.env.REACT_APP_NASA_API_KEY;

console.log("NASA API KEY:", API_KEY);

const generateRandomDate = () => {
  const start = new Date(1995, 5, 16);
  const end = new Date();

  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  return randomDate.toISOString().split("T")[0];
};

const formatAPODData = (data) => {
  return {
    title: data.title,
    explanation: data.explanation,
    image: data.url,
    mediaType: data.media_type,
    date: data.date,
    copyright: data.copyright || "NASA / Public Domain",
  };
};

export const fetchSpaceFact = async () => {
  try {
    const randomDate = generateRandomDate();

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${randomDate}`,
    );

    const data = await response.json();

    return formatAPODData(data);
  } catch (error) {
    console.error("Error fetching NASA APOD:", error);

    return null;
  }
};

export const searchSpaceFacts = async (query) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=40`,
    );

    const data = await response.json();

    console.log("NASA DATA:", data);
    console.log("IS ARRAY:", Array.isArray(data));

    const formattedQuery = query.toLowerCase().trim();

    const filteredResults = data.filter((item) => {
      if (item.media_type !== "image") {
        return false;
      }

      const title = item.title?.toLowerCase() || "";
      const explanation = item.explanation?.toLowerCase() || "";

      return (
        title.includes(formattedQuery) || explanation.includes(formattedQuery)
      );
    });

    const sortedResults = filteredResults.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();

      const aScore = aTitle.includes(formattedQuery) ? 2 : 1;
      const bScore = bTitle.includes(formattedQuery) ? 2 : 1;

      return bScore - aScore;
    });

    return sortedResults.map((item) => ({
      title: item.title,
      explanation: item.explanation,
      image: item.url,
      mediaType: item.media_type,
      date: item.date,
      copyright: item.copyright || "NASA / APOD",
    }));
  } catch (error) {
    console.error("Search Error:", error);
    return [];
  }
};
