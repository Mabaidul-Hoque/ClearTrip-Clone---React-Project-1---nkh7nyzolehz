import "./styles/App.css";
import SideNavbar from "./components/FlightsPage/NavbarSection/SideNavbar";
import Navbar from "./components/FlightsPage/NavbarSection/Navbar";
import Flights from "./components/FlightsPage/Flights";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation } from "react-router-dom";
import { FontProvider } from "./UseContext/ThemeProvider";
import { Outlet } from "react-router-dom";
import { useAuth } from "./UseContext/AuthorizationProvider";

function App() {
  const { pathname } = useLocation();
  const { logSignDetails } = useAuth();
  const { handleLoginOpen } = logSignDetails;

  return (
    <FontProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Navbar handleLoginOpen={handleLoginOpen} />
          <Box
            component="div"
            className="main-section"
            sx={{
              display: "flex",
              width: "93%",
              margin: "auto",
            }}
          >
            <SideNavbar />
            {pathname === "/" ? (
              <Flights />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "90vh",
                }}
              >
                <Outlet />
              </div>
            )}
          </Box>
        </div>
      </LocalizationProvider>
    </FontProvider>
  );
}

export default App;
