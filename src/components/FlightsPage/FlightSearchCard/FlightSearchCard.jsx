import React, { useCallback, useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../FlightPage.css";
import "./FlightSearchCard.css";
import { Box, Button, Paper, Stack } from "@mui/material";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";

import DepartDate from "./DepartDate";
import ReturnDate from "./ReturnDate";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PassengerAdd from "./PassengerAdd";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import DepartCityInput from "./DepartCityInput";
import DestinationCityInput from "./DestinationCityInput";

const fareBtnTexts = [
  "Regular fare",
  "Student fare",
  "Senior citizen fare",
  "Armed forces fare",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function FlightSearchCard() {
  const [fareBtnIndex, setFareBtnIndex] = useState(0);
  const [isSwitch, setIsSwitch] = useState(false);
  const navigate = useNavigate();
  const {
    airplaneDetails,
    searchPlane,
    departvalue,
    sourceDestValue,
    returnValue,
  } = useFlightSearch();
  const { source, destination, cityNameCodes } = sourceDestValue;
  const { airportNames } = airplaneDetails;
  const { handleSearchClick } = searchPlane;
  const { departDay } = departvalue;
  const { returnDay } = returnValue;

  const handleNavigation = () => {
    const encodedPath = btoa(
      `${source}-${destination}--${departDay}-&{returnDay}`
    );

    if (
      source.substring(0, 3) !== destination.substring(0, 3) &&
      cityNameCodes.includes(source.substring(0, 3)) &&
      cityNameCodes.includes(destination.substring(0, 3)) &&
      days.includes(departDay.substring(0, 3))
    ) {
      navigate(`/flights/results-${encodedPath}`);
    }
  };

  return (
    <Paper
      className="flight-search-form-card"
      sx={{
        width: {
          xs: "92vw",
          sm: "62vw",
          md: "48vw",
        },
        maxHeight: {
          xs: "61vh",
          sm: "51vh",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      {/* passenger addtion popper */}
      <PassengerAdd />
      {/* fare btns section */}
      <Box component="div">
        <Stack
          sx={{
            flexDirection: "row",
            gap: {
              xs: 0,
              sm: 1,
              md: 2,
              lg: 3,
            },
          }}
        >
          {fareBtnTexts.map((fareBtnText, index) => (
            <Box
              component="button"
              sx={{
                border: "1px solid lightgray",
                cursor: "pointer",
                fontSize: {
                  xs: "8px",
                  sm: "9px",
                  md: "13px",
                },
              }}
              key={fareBtnText}
              className={
                fareBtnIndex === index
                  ? "list-group-item fare-btn-active"
                  : "list-group-item"
              }
              onClick={(e) => {
                setFareBtnIndex(index);
              }}
            >
              {fareBtnText}
            </Box>
          ))}
        </Stack>
      </Box>
      {/* where from to section */}
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: {
            xs: 2,
            sm: 0,
          },
          position: "relative",
        }}
      >
        <div id="source-container">
          <div className="f-takeoff-icon">
            <FlightTakeoffOutlinedIcon htmlColor="#808080" />
          </div>
          <DepartCityInput
            options={airportNames}
            noOptionText={"No Match Found"}
            optionCount={5}
          />
        </div>

        <div className="f-switch-btn" onClick={() => setIsSwitch(!isSwitch)}>
          <SwapHorizontalCircleOutlinedIcon
            htmlColor="#5D86D7"
            fontSize="large"
          />
        </div>

        <div id="destination-container">
          <div className="f-landing-icon">
            <FlightLandOutlinedIcon htmlColor="#808080" />
          </div>
          <DestinationCityInput
            options={airportNames}
            noOptionText={"No Match Found"}
            optionCount={5}
          />
        </div>
      </Stack>
      {/* date picker and search btn */}
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: {
            xs: "1rem",
            lg: "2rem",
          },
        }}
      >
        <Stack sx={{ flexDirection: "row", position: "relative" }}>
          <div className="f-calender-icon">
            <CalendarMonthOutlinedIcon htmlColor="#808080" />
          </div>
          <DepartDate />
          <ReturnDate />
        </Stack>
        <Button
          variant="text"
          sx={{
            width: {
              xs: "80vw",
              sm: "10vw",
              md: "12vw",
              lg: "13vw",
            },
            height: {
              xs: "50px",
              sm: "56px",
            },
            bgcolor: "#F77728",
            color: "#FFFFFF",
            borderRadius: "7px",
            fontSize: "16px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#D4581D",
            },
          }}
          onClick={() => {
            handleSearchClick();
            handleNavigation();
          }}
        >
          Search flights
        </Button>
      </Stack>
    </Paper>
  );
}
