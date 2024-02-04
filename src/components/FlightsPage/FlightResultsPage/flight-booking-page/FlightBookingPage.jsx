import React from "react";
import FlightBookingNavbar from "./flight-booking-navbar/FlightBookingNavbar";
import { Box, Stack } from "@mui/material";
import BookingDetails from "./flight-booking-main/BookingDetails";
import FlightPriceCard from "./flight-booking-main/FlightPriceCard";

const FlightBookingPage = () => {
  return (
    <div className="flight-booking-page">
      <FlightBookingNavbar />
      <Box mt={2} mb={4} sx={{ borderBottom: "1px solid #E6E6E6" }}></Box>
      <main id="flight-booking-main">
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          {/* booking details */}
          <div id="booking-details">
            <BookingDetails />
          </div>

          {/* price card */}
          <div>
            <FlightPriceCard />
          </div>
        </Stack>
      </main>
    </div>
  );
};

export default FlightBookingPage;
