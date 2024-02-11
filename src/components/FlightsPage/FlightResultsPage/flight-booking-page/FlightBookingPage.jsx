import React, { useEffect, useState } from "react";
import FlightBookingNavbar from "./flight-booking-navbar/FlightBookingNavbar";
import { Box, Stack } from "@mui/material";
import BookingDetails from "./flight-booking-main/BookingDetails";
import FlightPriceCard from "./flight-booking-main/FlightPriceCard";
import { fetchSingleFlightDetails } from "../../../../Apis/FlightSearchApi";
import { useParams } from "react-router-dom";
import { useFlightSearch } from "../../../../UseContext/FlightsSearchProvider";

const FlightBookingPage = () => {
  const { singleFlight, setSingleFlight } = useFlightSearch().singleFlightValue;
  const { flightId } = useParams();

  useEffect(() => {
    fetchSingleFlightDetails(flightId).then((resp) => {
      console.log("Single flight details:", resp);
      setSingleFlight(resp.data);
    });
  }, []);
  console.log("singleFlight", singleFlight);

  return (
    <div className="flight-booking-page">
      {/* flight booking navbar */}
      <FlightBookingNavbar />
      {/* border bottom below navbar */}
      <Box mt={2} mb={4} sx={{ borderBottom: "1px solid #E6E6E6" }}></Box>
      {/* main content of booking page */}
      <main id="flight-booking-main">
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          {/* booking details */}
          <BookingDetails flightId={flightId} />

          {/* price card */}
          <FlightPriceCard />
        </Stack>
      </main>
    </div>
  );
};

export default FlightBookingPage;
