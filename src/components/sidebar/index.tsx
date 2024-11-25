// Sidebar.tsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    // Clear user session or token from localStorage
    localStorage.removeItem("userToken");
    navigate("/"); // Redirect to login page
  };

  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 200,
      }}
    >
      <Typography variant="h5" color="white" my={2}>
        CineFlix
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Box display="flex" alignItems="center" gap={2} color="white">
            <img src={homeIcon} alt="Home" style={{ width: 18 }} />
            <Typography>Home</Typography>
          </Box>
        </Link>
        <Link to="/bookmark" style={{ textDecoration: "none" }}>
          <Box display="flex" alignItems="center" gap={2} color="white">
            <img src={bookmarkIcon} alt="Bookmark" style={{ width: 18 }} />
            <Typography>Bookmark</Typography>
          </Box>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{ mt: 4 }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
