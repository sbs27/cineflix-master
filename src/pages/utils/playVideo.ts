// utils/playVideo.ts
export const generateIframeSrc = (videoId: string | null): string => {
    if (!videoId) {
      console.log("No videoId provided"); // Log if no videoId is provided
      return "";
    }
    const iframeSrc = `https://www.youtube.com/embed/${videoId}`;
    console.log("Generated iframe src:", iframeSrc); // Log the iframe src to debug
    return iframeSrc;
  };
  