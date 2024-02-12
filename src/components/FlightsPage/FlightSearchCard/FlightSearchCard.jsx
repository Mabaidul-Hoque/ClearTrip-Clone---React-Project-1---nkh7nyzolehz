import React, { useCallback, useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../FlightPage.css";
import { Box, Button, Paper, Stack, ThemeProvider } from "@mui/material";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PassengerAdd from "./PassengerAdd";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import DepartCityInput from "./DepartCityInput";
import DestinationCityInput from "./DestinationCityInput";
import { CustomTheme } from "../../../util/muiTheme";
import DateInputs from "./DateInputs";
import FareType from "./FareType";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function FlightSearchCard() {
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
    <ThemeProvider theme={CustomTheme}>
      <Paper
        className="flight-search-form-card"
        sx={{
          width: {
            xxs: "94vw",
            xs: "92vw",
            sm: "64vw",
            md: "62vw",
            lg: "48vw",
          },
          height: {
            xxs: "71vh",
            xs: "62.5vh",
            sm: "54vh",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: {
            xxs: 1,
            xs: 1,
            sm: 3,
            md: 4,
            lg: 3,
          },
          padding: {
            xs: "10px",
            sm: "20px",
          },
          position: "relative",
        }}
      >
        {/* passenger addtion popper */}
        <PassengerAdd />
        {/* fare btns section */}
        <FareType />
        {/* where from to section */}
        <Stack
          sx={{
            flexDirection: {
              xxs: "column",
              sm: "row",
            },
            gap: {
              xxs: 2,
              sm: 0,
            },
            position: "relative",
            width: "100%",
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
              xxs: 1,
              xs: 3,
              sm: 2,
              md: 4,
              xl: 5,
            },
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              position: "relative",
            }}
          >
            <div className="f-calender-icon">
              <CalendarMonthOutlinedIcon htmlColor="#808080" />
            </div>
            <DateInputs />
          </Stack>
          <Button
            variant="text"
            sx={{
              width: {
                xxs: "85vw",
                sm: "20vw",
                md: "19.4vw",
                lg: "15vw",
              },
              height: {
                xxs: "60px",
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
    </ThemeProvider>
  );
}
