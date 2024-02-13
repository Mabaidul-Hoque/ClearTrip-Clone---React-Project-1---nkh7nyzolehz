import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FareDetails from "./FareDetails";
import ContactDetails from "./ContactDetails";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";
import FareSelection from "./FareSelection";
import "../FlightBookingPage.css";
import { useNavigate } from "react-router-dom";

const BookingDetails = ({ flightId }) => {
  const { singleFlight } = useFlightSearch().singleFlightValue;
  const navigate = useNavigate();

  const handleContinue = (phone, email) => {
    if (phone && email) {
      navigate(`/flights/flight_booking_confirmation/${flightId}`);
    } else {
      alert("Fill all the details");
    }
  };

  return (
    <div className="booking-details">
      {/* header */}
      <Stack
        mb={4}
        mt={{
          xs: -3,
        }}
        flexDirection={"row"}
        alignItems={"center"}
        gap={2}
        width={{
          xs: "90vw",
          md: "60vw",
        }}
      >
        <div className="number-circle">
          <span>1</span>
        </div>
        <Typography
          fontSize={{
            xs: "24px",
          }}
          fontWeight={500}
        >
          Review your itinerary
        </Typography>
      </Stack>
      {/* flight details */}
      <Stack
        sx={{
          width: "60vw",
        }}
      >
        {/* flight 1 details */}
        <div className="details-one">
          {/* header */}
          <Stack
            mb={2}
            flexDirection={"row"}
            alignItems={"flex-end"}
            gap={2}
            width={{
              xs: "90vw",
              md: "60vw",
            }}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              sx={{ fontWeight: "600", fontSize: "18px" }}
            >
              {singleFlight.source}
              <ArrowForwardIcon fontSize="small" />
              {singleFlight.destination}
            </Stack>
            <Typography fontSize={"14px"}>
              {localStorage.getItem("day")} 2024
            </Typography>
          </Stack>
          {/* main content */}
          <Stack
            flexDirection={"row"}
            gap={2}
            width={{
              xs: "90vw",
            }}
          >
            {/* left part */}
            <Stack>
              <img
                className="booking-image"
                src="https://seeklogo.com/images/V/vistara-logo-C07710BC2B-seeklogo.com.png"
                alt="vistara-logo"
              />
              <Typography mt={1} fontSize={"14px"} fontWeight={600}>
                IndiGo
              </Typography>
              <Typography fontSize={"12px"}>6E-2519</Typography>
              <Typography fontSize={"12px"}>Economy</Typography>
            </Stack>

            <div className="dashed-line-container">
              <div className="start-circle"></div>
              <div className="dashed-line"></div>
              <div className="end-circle"></div>
            </div>
            {/* right part depart destinatin */}
            <Stack gap={4}>
              <Typography>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "4px",
                  }}
                >
                  {singleFlight.departureTime} {singleFlight.source}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "500" }}>
                  Indira Gandhi Airport New Delhi, Terminal 2
                </span>
              </Typography>
              <Stack flexDirection={"row"} alignItems={"flex-start"} gap={1}>
                <AccessTimeIcon htmlColor="gray" />
                <span>2h 5m</span>
              </Stack>
              <Typography>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "4px",
                  }}
                >
                  {singleFlight.arrivalTime} {singleFlight.destination}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "500" }}>
                  Chatrapati Shivaji Airport Mumbai, Terminal 2
                </span>
              </Typography>
            </Stack>
          </Stack>
        </div>
        <Box mt={3} mb={3} sx={{ borderBottom: "1px dotted #E6E6E6" }}></Box>
        {/* flight 2 details */}
        <div className="details-two">
          {/* header */}
          <Stack
            mb={2}
            flexDirection={"row"}
            alignItems={"flex-end"}
            gap={2}
            width={{
              xs: "90vw",
            }}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              sx={{ fontWeight: "600", fontSize: "18px" }}
            >
              {singleFlight.destination}
              <ArrowForwardIcon fontSize="small" />
              {singleFlight.source}
            </Stack>
            <Typography fontSize={"14px"}>Thu, 10 Aug 2023</Typography>
          </Stack>
          {/* main content */}
          <Stack
            flexDirection={"row"}
            gap={2}
            width={{
              xs: "90vw",
            }}
          >
            {/* left part */}
            <Stack>
              <img
                width={"60px"}
                src="https://seeklogo.com/images/V/vistara-logo-C07710BC2B-seeklogo.com.png"
                alt="vistara-logo"
              />
              <Typography mt={1} fontSize={"14px"} fontWeight={600}>
                IndiGo
              </Typography>
              <Typography fontSize={"12px"}>6E-2519</Typography>
              <Typography fontSize={"12px"}>Economy</Typography>
            </Stack>

            <div className="dashed-line-container">
              <div className="start-circle"></div>
              <div className="dashed-line"></div>
              <div className="end-circle"></div>
            </div>
            {/* right part */}
            <Stack gap={4}>
              <Typography>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  {singleFlight.arrivalTime} {singleFlight.destination}{" "}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "500" }}>
                  Indira Gandhi Airport New Delhi, Terminal 2
                </span>
              </Typography>
              <Stack flexDirection={"row"} alignItems={"flex-start"} gap={1}>
                <AccessTimeIcon htmlColor="gray" />
                <span>2h 5m</span>
              </Stack>
              <Typography>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  {singleFlight.departureTime} {singleFlight.source}{" "}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "500" }}>
                  Chatrapati Shivaji Airport Mumbai, Terminal 2
                </span>
              </Typography>
            </Stack>
          </Stack>
        </div>
      </Stack>
      <Box mt={3} mb={3} sx={{ borderBottom: "1px dotted #E6E6E6" }}></Box>

      {/* fare selection */}
      <FareSelection singleFlight={singleFlight} />
      {/* fare details */}
      <FareDetails />
      {/* contact details */}
      <ContactDetails handleContinue={handleContinue} />
      <Stack mt={10}></Stack>
    </div>
  );
};

export default BookingDetails;
