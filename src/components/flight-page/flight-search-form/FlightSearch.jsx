import React from "react";
import "../../../styles/flight/Flight.css";
import FlightSearchCard from "./FlightSearchCard";
import { Typography, Box } from "@mui/material";

const FlightSearch = () => {
  return (
    <Box component="div">
      {/* FLIGHT SEARCH HEADER */}
      <Box
        component="div"
        sx={{
          textAlign: "left",
          mb: {
            xs: 2,
            sm: 4,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontWeight: "500",
            color: "#3B3B3B",
            fontSize: {
              xs: "23px",
              md: "36px",
            },
          }}
        >
          Search flights
        </Typography>
        <Typography
          gutterBottom
          sx={{
            color: "#525252",
            fontWeight: {
              xs: "400",
              md: "500",
            },
            fontSize: {
              xs: "16px",
            },
          }}
        >
          Enjoy hassle free bookings with Cleartrip
        </Typography>
      </Box>
      {/* FLIGHT SEARCH CARD */}
      <FlightSearchCard />
    </Box>
  );
};

export default FlightSearch;
