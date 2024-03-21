import "./styles/App.css";
import SideNavbar from "./components/flight-page/navabr-section/SideNavbar";
import Navbar from "./components/flight-page/navabr-section/Navbar";
import Flight from "./pages/flight/Flight";
import { Box, Divider, Stack, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation } from "react-router-dom";
import { FontProvider } from "./contexts/FontProvider";
import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthorizationProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./pages/footer/Footer";

function App() {
  const { pathname } = useLocation();
  const { logSignDetails } = useAuth();
  const { handleLoginOpen } = logSignDetails;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* NAVBAR */}
        <Navbar handleLoginOpen={handleLoginOpen} />
        {/* MAIN CONTENT OR DIFFERENT ROUTE DISPLAY */}
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
            <Flight />
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
        {/* DIVIDER */}
        <Divider sx={{ my: "4rem" }} />
        {/* FOOTER */}
        <Footer />
        {/* TOAST_CONATINER */}
        <ToastContainer />
      </div>
    </LocalizationProvider>
  );
}

export default App;
