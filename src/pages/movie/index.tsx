import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMovieContext } from "../../context/movie-context";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";

const MoviePage = () => {
  const [filteredMovies, setFilteredMovies] = useState<MovieDataType[]>([]);
  const { state: { movies, user }, dispatch } = useMovieContext();

  // Filter movies for "recommendation"
  const recommendList = movies.filter((movie: MovieDataType) => !movie.isTrending);

  // Handle bookmark toggling
  const handleBookmark = (id: string) => {
    dispatch({ type: "TOGGLE_BOOKMARK", payload: id }); // Updated to use payload
  };

  // Filter movies based on search input or other criteria
  useEffect(() => {
    setFilteredMovies(recommendList);
  }, [movies]);

  return (
    <Box>
      <Typography variant="h5" component="h1" my={6} fontWeight={400}>
        Recommended Movies
      </Typography>
      <MovieList recommendList={filteredMovies} onBookmark={handleBookmark} />
    </Box>
  );
};

export default MoviePage;
