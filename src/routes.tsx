// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Movie from "./pages/movie";
import Home from "./pages/home";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/movies",
    element: <Movie />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
  },
]);
