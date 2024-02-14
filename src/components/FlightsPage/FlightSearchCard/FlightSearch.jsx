import { Typography, Box } from "@mui/material";
import "../FlightPage.css";
import React from "react";
import FlightSearchCard from "./FlightSearchCard";

const FlightSearch = () => {
  return (
    <Box component="div">
      {/* flight search header */}
      <Box
        sx={{
          textAlign: "left",
          mb: {
            xs: 2,
            sm: 4,
          },
        }}
        component="div"
      >
        <Typography
          mb={1}
          sx={{
            fontWeight: "500",
            color: "#1A1A1A",
            fontSize: {
              xs: "23px",
              md: "36px",
            },
          }}
          variant="h4"
        >
          Search flights
        </Typography>
        <Typography
          gutterBottom
          sx={{
            color: "#1A1A1A",
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
      {/* flight search card */}
      <FlightSearchCard />
    </Box>
  );
};

export default FlightSearch;
