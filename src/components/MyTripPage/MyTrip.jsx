import React from "react";
import "./MyTrip.css";
import Navbar from "../FlightsPage/NavbarSection/Navbar";
import { Box, Button, Divider, Paper, Tooltip } from "@mui/material";
import Footer from "../FooterPage/Footer";
import { useAuth } from "../../UseContext/AuthorizationProvider";
import DoneIcon from "@mui/icons-material/Done";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import MytripNavbar from "./MytripNavbar";
import LoginPage from "../Login-signup/LoginPage";

const fetchYourTrips = [
  "Check your trip details",
  "Cancel your trip",
  "Amend your flights",
  "Print E ticket",
  "and more...",
];
const MyTrip = () => {
  const { token } = useAuth().tokenDetails;
  const { handleLoginOpen } = useAuth().logSignDetails;

  return (
    <div id="my-trip-page">
      <MytripNavbar token={token} handleLoginOpen={handleLoginOpen} />
      <Divider />
      <main id="mytrip-main">
        {token ? (
          <>
            <h1>Trips you've booked</h1>
          </>
        ) : (
          <div className="main-without-loggedin">
            <div className="main-left">
              <h1>Welcome to Cleartrip Support</h1>
              <p>Find answers to all your queries, call us at +91 9595333333</p>
              <Box>
                <FlightIcon sx={{ color: "#AECFF9", width: "4rem" }} />
                <HotelIcon sx={{ color: "#AECFF9", width: "4rem" }} />
                <DirectionsBusIcon sx={{ color: "#AECFF9", width: "4rem" }} />
              </Box>

              <Paper elevation={8} sx={{ mt: 10, p: 4, width: {
                xs: "90vw", sm: "70vw", md: "50vw", lg: "40rem"
              } }}>
                <h3>
                  Want to know about your bookings?Help us find your trips
                </h3>
                <p style={{ fontSize: "14px", marginBottom: "30px" }}>
                  Give us any traveller's Trip ID to check trip details
                </p>
                <label style={{ marginRight: "30px" }} htmlFor="trip-id">
                  Trip ID
                </label>
                <Tooltip title="Taken default value">
                  <input
                    defaultValue={"vf1245t12f6g3s"}
                    type="text"
                    id="trip-id"
                    disabled="true"
                  />
                </Tooltip>
                <p>
                  Have an account?
                  <Button
                    onClick={handleLoginOpen}
                    sx={{ textTransform: "none" }}
                  >
                    Sign in
                  </Button>{" "}
                  to fetch your trips
                </p>
              </Paper>
            </div>

            <div className="main-right">
              {/* Fetch your trips to card */}
              <Paper sx={{ p: 2, mt: 6, mb: 4, width: { xs: "90vw", sm: "70vw", md: "20rem"} }}>
                <p>Fetch your trips to</p>
                <ul>
                  {fetchYourTrips?.map((item) => (
                    <li key={item} className="item">
                      <DoneIcon fontSize="sm" htmlColor="green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Paper>

              {/* Plan your vacation and book hotels in over 15,000 hotels worldwide */}
              <Paper sx={{ p: 2, width: { xs: "90vw", sm: "70vw", md: "20rem"} }}>
                <p>
                  Plan your vacation and book hotels in over 15,000 hotels
                  worldwide
                </p>
                <img
                  className="vacation-plan-photo"
                  alt="plan-photo"
                  src="https://fastui.cltpstatic.com/raw/upload/accounts-pwa/static/media/hotelbooking.6e9f65b4.png"
                />
              </Paper>
            </div>
          </div>
        )}
      </main>

      <LoginPage />

      <Divider sx={{ mt: 8, mb: 2 }} />
      <Footer />
    </div>
  );
};

export default MyTrip;
