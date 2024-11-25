import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { MovieDataType } from "../assets/data";

// Define the types for the movie state and actions
type MovieState = {
  movies: MovieDataType[];
  currentVideo: MovieDataType | null;
  user?: { email: string; token: string }; // Add user to state
};

type MovieAction =
  | { type: "SET_MOVIES"; payload: MovieDataType[] }
  | { type: "TOGGLE_BOOKMARK"; payload: string }
  | { type: "SET_USER"; payload: { email: string; token: string } }
  | { type: "SET_VIDEO"; payload: string };

// Initial state
const initialState: MovieState = {
  movies: [], // Movies will be loaded from localStorage
  currentVideo: null,
  user: JSON.parse(localStorage.getItem("userToken") || "null"), // Load user from localStorage
};

type MovieContextType = {
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
};

const MovieContext = createContext<MovieContextType | null>(null);

// Reducer function to manage movie state
const movieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };

    case "TOGGLE_BOOKMARK":
      const updatedMovies = state.movies.map((movie) =>
        movie.id === action.payload
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      );

      // Update bookmark status in localStorage (only movie ids)
      const bookmarkedMovies = updatedMovies.filter((movie) => movie.isBookmarked);
      const bookmarkedMovieIds = bookmarkedMovies.map((movie) => movie.id);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovieIds));

      return { ...state, movies: updatedMovies };

    case "SET_USER":
      // When user logs in, save the user to localStorage
      localStorage.setItem("userToken", JSON.stringify(action.payload));
      return { ...state, user: action.payload };

    case "SET_VIDEO":
      return { ...state, currentVideo: state.movies.find((m) => m.id === action.payload) || null };

    default:
      return state;
  }
};

// MovieProvider component that provides state and dispatch function
export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  // Load movies from localStorage or another source if needed
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    if (storedMovies.length > 0) {
      dispatch({ type: "SET_MOVIES", payload: storedMovies });
    }
  }, []);

  // Load the list of bookmarked movie IDs from localStorage
  useEffect(() => {
    const storedBookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies") || "[]");

    // If there are stored movies and stored bookmarked movies, update state
    if (storedBookmarkedMovies.length > 0 && state.movies.length > 0) {
      const updatedMovies = state.movies.map((movie) => ({
        ...movie,
        isBookmarked: storedBookmarkedMovies.includes(movie.id),
      }));
      dispatch({ type: "SET_MOVIES", payload: updatedMovies });
    }
  }, [state.movies]);

  // Sync bookmarks when the user logs out
  useEffect(() => {
    // If there is no user, the bookmarks are persisted in localStorage
    if (!state.user) {
      const storedBookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies") || "[]");

      // If bookmarks are found, apply them to the current movie list
      if (storedBookmarkedMovies.length > 0 && state.movies.length > 0) {
        const updatedMovies = state.movies.map((movie) => ({
          ...movie,
          isBookmarked: storedBookmarkedMovies.includes(movie.id),
        }));
        dispatch({ type: "SET_MOVIES", payload: updatedMovies });
      }
    }
  }, [state.user, state.movies]);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook to use the movie context
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
