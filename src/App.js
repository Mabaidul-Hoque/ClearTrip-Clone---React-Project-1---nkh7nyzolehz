import "./styles/App.css";
import SideNavbar from "./components/FlightsPage/NavbarSection/SideNavbar";
import Navbar from "./components/FlightsPage/NavbarSection/Navbar";
import Flights from "./components/FlightsPage/Flights";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation } from "react-router-dom";
import { FontProvider } from "./UseContext/FontProvider";
import { Outlet } from "react-router-dom";
import { useAuth } from "./UseContext/AuthorizationProvider";
import { Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { pathname } = useLocation();
  const { logSignDetails } = useAuth();
  const { handleLoginOpen } = logSignDetails;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Navbar handleLoginOpen={handleLoginOpen} />
        <Stack
          sx={{
            flexDirection: {
              xxs: "column",
              xs: "column",
              sm: "row",
            },
          }}
          className="home-main"
        >
          <SideNavbar />
          {pathname === "/" ? (
            <Flights />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Outlet />
            </div>
          )}
        </Stack>
        <Box sx={{ borderBottom: "1px solid gray", mt: "8rem" }}></Box>
        <Footer />
        <ToastContainer />
      </div>
    </LocalizationProvider>
  );
}

export default App;
