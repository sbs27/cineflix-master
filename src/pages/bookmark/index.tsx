import React from "react";
import { useMovieContext } from "../../context/movie-context";
import Sidebar from "../../components/sidebar";
import { Box, Typography } from "@mui/material";
import MovieCard from "../../components/movie-card";

const Bookmark = () => {
  const { state } = useMovieContext();
  const { movies } = state;

  const bookmarkedVideos = movies.filter((movie) => movie.isBookmarked);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, backgroundColor: "#10141f", minHeight: "100vh" }}>
        <Typography color="white" variant="h4" sx={{ py: 2, px: 3 }}>
          Bookmarked Videos
        </Typography>
        <Box sx={{ px: 3, py: 2 }}>
          {bookmarkedVideos.length > 0 ? (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {bookmarkedVideos.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </Box>
          ) : (
            <Typography color="white">No bookmarked videos yet.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Bookmark;
