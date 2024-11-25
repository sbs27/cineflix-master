// original theme home page

// import React, { useEffect, useState } from "react";
// import { useMovieContext } from "../../context/movie-context";
// import { MovieDataType } from "../../assets/data";
// import MovieCard from "../../components/movie-card";
// import Sidebar from "../../components/sidebar";
// import { Box, Typography, IconButton, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { fetchTrendingVideos } from "../../pages/utils/fetchTrendingVideos";
// import CloseIcon from "@mui/icons-material/Close";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// const Home = () => {
//   const { state, dispatch } = useMovieContext();
//   const { movies, user } = state;
//   const navigate = useNavigate();

//   const [trendingVideos, setTrendingVideos] = useState<MovieDataType[]>([]);
//   const [filteredVideos, setFilteredVideos] = useState<MovieDataType[]>([]); // For search filtering
//   const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

//   // Check user login and initialize bookmark state
//   useEffect(() => {
//     if (!user) {
//       console.log("User is not logged in, redirecting to login...");
//       navigate("/"); // Redirect to login if not logged in
//     } else {
//       console.log("User logged in:", user);
//     }
//   }, [user, navigate]);

//   // Fetch trending videos
//   useEffect(() => {
//     const getTrendingVideos = async () => {
//       try {
//         const trending = await fetchTrendingVideos(); // Fetch trending videos
//         setTrendingVideos(trending);
//         setFilteredVideos(trending); // Initialize filteredVideos with all trending videos
//       } catch (error) {
//         console.error("Error fetching trending videos:", error);
//       }
//     };

//     getTrendingVideos();
//   }, []);

//   // Handle video click
//   const handleVideoClick = (videoId: string) => {
//     console.log("Video clicked:", videoId);
//     setSelectedVideoId(videoId);
//   };

//   // Handle bookmark click
//   const handleBookmarkClick = (videoId: string) => {
//     dispatch({ type: "TOGGLE_BOOKMARK", payload: videoId });
//   };

//   // Handle search input change and filter videos
//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     // Filter videos based on title
//     const filtered = trendingVideos.filter((video) =>
//       video.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredVideos(filtered);
//   };

//   // Close full-screen video player
//   const closeVideoPlayer = () => {
//     setSelectedVideoId(null);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content area */}
//       <Box sx={{ flexGrow: 1, backgroundColor: "#10141f", minHeight: "100vh" }}>
//         <Typography color="white" variant="h4" sx={{ py: 2, px: 3 }}>
//           Home
//         </Typography>

//         {/* Search Bar */}
//         <Box sx={{ px: 3, py: 2 }}>
//           <TextField
//             label="Search Videos"
//             variant="outlined"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             sx={{ width: "100%", marginBottom: 2 }}
//             InputProps={{
//               style: {
//                 color: "white",
//                 borderColor: "white",
//               },
//             }}
//           />
//         </Box>

//         {/* Trending Videos Section */}
//         <Box sx={{ px: 3, py: 2 }}>
//           <Typography color="white" variant="h5" sx={{ mb: 2 }}>
//             Trending Videos
//           </Typography>
//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//             {filteredVideos.length > 0 ? (
//               filteredVideos.map((video) => (
//                 <Box
//                   key={video.id}
//                   sx={{
//                     width: 200,
//                     height: 300,
//                     cursor: "pointer",
//                     position: "relative",
//                   }}
//                   onClick={() => handleVideoClick(video.id)}
//                 >
//                   <img
//                     src={video.thumbnail.regular.large}
//                     alt={video.title}
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                   <Typography color="white" variant="body2" sx={{ mt: 1 }}>
//                     {video.title}
//                   </Typography>

//                   {/* Bookmark Icon */}
//                   <IconButton
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent triggering video click
//                       handleBookmarkClick(video.id);
//                     }}
//                     sx={{
//                       position: "absolute",
//                       top: 10,
//                       right: 10,
//                       color: movies.find((movie) => movie.id === video.id)
//                         ?.isBookmarked
//                         ? "red"
//                         : "white",
//                     }}
//                   >
//                     {movies.find((movie) => movie.id === video.id)
//                       ?.isBookmarked ? (
//                       <FavoriteIcon />
//                     ) : (
//                       <FavoriteBorderIcon />
//                     )}
//                   </IconButton>
//                 </Box>
//               ))
//             ) : (
//               <Typography color="white">No videos found.</Typography>
//             )}
//           </Box>
//         </Box>

//         {/* Full-screen Video Player (Popup) */}
//         {selectedVideoId && (
//           <Box
//             sx={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.8)",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               zIndex: 9999,
//             }}
//           >
//             {/* Close Button */}
//             <IconButton
//               onClick={closeVideoPlayer}
//               sx={{
//                 position: "absolute",
//                 top: 20,
//                 right: 20,
//                 color: "white",
//                 zIndex: 10000,
//               }}
//             >
//               <CloseIcon />
//             </IconButton>

//             <iframe
//               width="80%"
//               height="80%"
//               src={`https://www.youtube.com/embed/${selectedVideoId}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Home;

//----------------------------------------------------------------

// light theme home page


import React, { useEffect, useState } from "react";
import { useMovieContext } from "../../context/movie-context";
import { MovieDataType } from "../../assets/data";
import MovieCard from "../../components/movie-card";
import Sidebar from "../../components/sidebar";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchTrendingVideos } from "../../pages/utils/fetchTrendingVideos";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Home = () => {
  const { state, dispatch } = useMovieContext();
  const { movies, user } = state;
  const navigate = useNavigate();

  const [trendingVideos, setTrendingVideos] = useState<MovieDataType[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<MovieDataType[]>([]); // For search filtering
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  // Check user login and initialize bookmark state
  useEffect(() => {
    if (!user) {
      console.log("User is not logged in, redirecting to login...");
      navigate("/"); // Redirect to login if not logged in
    } else {
      console.log("User logged in:", user);
    }
  }, [user, navigate]);

  // Fetch trending videos
  useEffect(() => {
    const getTrendingVideos = async () => {
      try {
        const trending = await fetchTrendingVideos(); // Fetch trending videos
        setTrendingVideos(trending);
        setFilteredVideos(trending); // Initialize filteredVideos with all trending videos
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      }
    };

    getTrendingVideos();
  }, []);

  // Handle video click
  const handleVideoClick = (videoId: string) => {
    console.log("Video clicked:", videoId);
    setSelectedVideoId(videoId);
  };

  // Handle bookmark click
  const handleBookmarkClick = (videoId: string) => {
    dispatch({ type: "TOGGLE_BOOKMARK", payload: videoId });
  };

  // Handle search input change and filter videos
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter videos based on title
    const filtered = trendingVideos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  // Close full-screen video player
  const closeVideoPlayer = () => {
    setSelectedVideoId(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <Box sx={{ flexGrow: 1, backgroundColor: "#f5f5dc", minHeight: "100vh" }}>
        <Typography color="black" variant="h4" sx={{ py: 2, px: 3 }}>
          Home
        </Typography>

        {/* Search Bar */}
        <Box sx={{ px: 3, py: 2 }}>
          <TextField
            label="Search Videos"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              width: "100%",
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white", // Set background color of the input to white
                borderColor: "#ccc", // Set the border color
              },
              "& .MuiInputLabel-root": {
                color: "#333", // Set label color
              },
              "& .MuiOutlinedInput-input": {
                color: "#333", // Set input text color to dark gray for visibility
              },
              "&:hover .MuiOutlinedInput-root": {
                borderColor: "#61dafb", // On hover, change border color
              },
            }}
          />
        </Box>

        {/* Trending Videos Section */}
        <Box sx={{ px: 3, py: 2 }}>
          <Typography color="black" variant="h5" sx={{ mb: 2 }}>
            Trending Videos
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <Box
                  key={video.id}
                  sx={{
                    width: 200,
                    height: 300,
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => handleVideoClick(video.id)}
                >
                  <img
                    src={video.thumbnail.regular.large}
                    alt={video.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography color="black" variant="body2" sx={{ mt: 1 }}>
                    {video.title}
                  </Typography>

                  {/* Bookmark Icon */}
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering video click
                      handleBookmarkClick(video.id);
                    }}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: movies.find((movie) => movie.id === video.id)
                        ?.isBookmarked
                        ? "red"
                        : "black",
                    }}
                  >
                    {movies.find((movie) => movie.id === video.id)
                      ?.isBookmarked ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Box>
              ))
            ) : (
              <Typography color="black">No videos found.</Typography>
            )}
          </Box>
        </Box>

        {/* Full-screen Video Player (Popup) */}
        {selectedVideoId && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={closeVideoPlayer}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                zIndex: 10000,
              }}
            >
              <CloseIcon />
            </IconButton>

            <iframe
              width="80%"
              height="80%"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;

