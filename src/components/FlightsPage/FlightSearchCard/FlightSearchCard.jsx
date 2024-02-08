import React, { useCallback, useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../FlightPage.css";
import "./FlightSearchCard.css";
import { Box, Button } from "@mui/material";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";
import useFlightSectionStyles from "./FlightSearchCardStyles";
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

  const { pathname } = useLocation();

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
    <>
      <div className="flight-search-form-card">
        {/* passenger addtion popper */}
        <PassengerAdd />
        {/* fare btns section */}
        <Box pl={1} mb={2} className="fare-btns-container" component="div">
          {fareBtnTexts.map((fareBtnText, index) => (
            <Box
              component="button"
              sx={{
                border: "1px solid lightgray",
                "&:hover": {
                  cursor: "pointer",
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
        </Box>

        {/* where from to section */}
        <Box mb={3} component="div" className="source-dest-container">
          <div id="source-container">
            <FlightTakeoffOutlinedIcon
              htmlColor="#808080"
              sx={{
                position: "absolute",
                left: "3.5%",
                top: "0.7rem",
                zIndex: "1",
              }}
            />
            <DepartCityInput
              options={airportNames}
              noOptionText={"No Match Found"}
              optionCount={5}
            />
          </div>

          <SwapHorizontalCircleOutlinedIcon
            htmlColor="#5D86D7"
            fontSize="large"
            sx={{
              position: "absolute",
              left: "18rem",
              top: "0.5rem",
              zIndex: "1",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setIsSwitch(!isSwitch)}
          />
          <div id="destination-container">
            <FlightLandOutlinedIcon
              htmlColor="#808080"
              sx={{
                position: "absolute",
                right: "16rem",
                top: "0.8rem",
                zIndex: "1",
              }}
            />
            <DestinationCityInput
              options={airportNames}
              noOptionText={"No Match Found"}
              optionCount={5}
            />
          </div>
        </Box>
        {/*  date picker and ssearch flight section  */}
        <Box className="search-btn-conatiner" component="div">
          <div className="flight-date-picker">
            <DepartDate />
            <ReturnDate />
          </div>
          <Button
            variant="text"
            sx={{
              width: "15rem",
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
          <Box
            sx={{
              position: "absolute",
              left: "1rem",
              bottom: "0.8rem",
            }}
          >
            <CalendarMonthOutlinedIcon htmlColor="#808080" />
          </Box>
        </Box>
      </div>
    </>
  );
}
