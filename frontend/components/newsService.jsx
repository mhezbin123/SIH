// newsService.js
export const fetchGlobalHealthNews = async () => {
  const API_KEY = '72ejPbWssu-Q68_SRUBJxahIeK9YVF5q8oAPjs0mDOAkbnPI';
  const endpoint = `https://api.currentsapi.services/v1/latest-news?category=health&apiKey=${API_KEY}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.news; // Adjust according to the API response structure
  } catch (error) {
    console.error('Error fetching health news:', error);
    throw error;
  }
};
