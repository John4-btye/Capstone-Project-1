const API_KEY = process.env.REACT_APP_NASA_API_KEY;

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
  const randomDate = generateRandomDate();

  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${randomDate}`,
  );

  if (!response.ok) {
    throw new Error(`NASA APOD request failed (${response.status})`);
  }

  const data = await response.json();

  if (!data || !data.title || !data.explanation || !data.url) {
    throw new Error("NASA APOD returned unexpected data");
  }

  return formatAPODData(data);
};

export const searchSpaceFacts = async (query) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=40`,
  );

  if (!response.ok) {
    throw new Error(`NASA APOD search request failed (${response.status})`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("NASA APOD search returned unexpected data");
  }

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
    const aTitle = (a.title || "").toLowerCase();
    const bTitle = (b.title || "").toLowerCase();

    const aScore = aTitle.includes(formattedQuery) ? 2 : 1;
    const bScore = bTitle.includes(formattedQuery) ? 2 : 1;

    return bScore - aScore;
  });

  return sortedResults.map((item) => formatAPODData(item));
};
