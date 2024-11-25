// utils/fetchTrendingVideos.ts
export const fetchTrendingVideos = async () => {
  const API_KEY = "AIzaSyAn0uM-KTqmPmcUNyx2IgrErPvBkNHD6wE";
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch trending videos from YouTube API.");
    }

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("Invalid data format received from YouTube API.");
    }

    return data.items.map((video: any) => ({
      id: video.id,
      title: video.snippet.title,
      thumbnail: { regular: { large: video.snippet.thumbnails.high.url } },
      year: new Date(video.snippet.publishedAt).getFullYear(),
      category: "YouTube",
      rating: "N/A",
      isBookmarked: false,
      isTrending: true,
    }));
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    return []; // Return an empty array in case of an error
  }
};
