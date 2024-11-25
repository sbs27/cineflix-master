const API_KEY = "AIzaSyAn0uM-KTqmPmcUNyx2IgrErPvBkNHD6wE"; 

/**
 * Fetch a YouTube video based on a search query.
 * @param query - The movie title or search term.
 */
export const fetchVideo = async (query: string): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(
        query
      )}&key=${API_KEY}`
    );
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items[0].id.videoId; 
    }
    console.warn("No videos found for the query:", query);
    return null;
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
};
