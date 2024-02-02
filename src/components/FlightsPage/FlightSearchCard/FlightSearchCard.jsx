import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../FlightPage.css";
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
  const navigate = useNavigate();
  const [fareBtnIndex, setFareBtnIndex] = useState(0);
  const [isSwitch, setIsSwitch] = useState(false);
  const contextValues = useFlightSearch();
  const [inputValue, setInputValue] = useState("");

  const {
    handleSourceChange,
    handleDestinationChange,
    sourceRef,
    destinationRef,
    source,
    destination,
    cityNameCodes,
    setSource,
  } = contextValues.sourceDestValue;

  const { airportNames } = contextValues.fecthValues;
  const { handleSearchClick } = contextValues.searchPlane;
  const { departDay } = contextValues.departvalue;

  const classes = useFlightSectionStyles();

  // const handleSearch = (value, cb) => {
  //   // just to explian API call

  //   let tempOptions = [...OPTION, ...airportNames];
  //   tempOptions = tempOptions.filter((item) =>
  //     item["name"]?.toLowerCase().includes(value.toLowerCase())
  //   );
  //   // setOptions
  //   cb(tempOptions);
  // };

  const handleNavigation = () => {
    if (
      source.substring(0, 3) !== destination.substring(0, 3) &&
      cityNameCodes.includes(source.substring(0, 3)) &&
      cityNameCodes.includes(destination.substring(0, 3)) &&
      days.includes(departDay.substring(0, 3))
    ) {
      navigate("/flights/results");
    }
    // console.log("source-card", source);
  };

  return (
    <>
      <div className="flight-search-form-card">
        {/* passenger addtion popper */}
        <PassengerAdd />
        {/* fare btns section */}
        <Box
          pl={1}
          mb={2}
          className={classes.fareBtnsContainer}
          component="div"
        >
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
              sx={{ position: "absolute", left: "3.5%", top: "0.7rem" }}
            />
            {/* <input
              type="text"
              id="source-input"
              name="source-input"
              list="data"
              // value={source}
              onChange={(e) => handleSourceChange(e.target.value)}
            />
            <datalist id="data">
              {airportNames.map((city) => (
                <option key={city._id}>{city.iata_code}</option>
              ))}
            </datalist> */}

            <DepartCityInput
              options={airportNames}
              noOptionText={"No Match Found"}
              // onSearch={handleSearch}
              // optionKey={"iata_code"}
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
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setIsSwitch(!isSwitch)}
          />
          <div id="destination-container">
            <FlightLandOutlinedIcon
              htmlColor="#808080"
              sx={{ position: "absolute", right: "16rem", top: "0.8rem" }}
            />
            {/* <input
              type="text"
              id="destination-input"
              name="destination-input"
              list="data"
              // value={source}
              onChange={(e) => handleDestinationChange(e.target.value)}
            />
            <datalist
              style={{ width: "500px" }}
              className="source-dropdown"
              id="data"
            >
              {airportNames.map((airportName) => (
                <option
                  value={`${airportName.iata_code} - ${airportName.city}, IN`}
                  key={airportName._id}
                ></option>
              ))}
            </datalist> */}

            <DestinationCityInput
              options={airportNames}
              noOptionText={"No Match Found"}
              // onSearch={handleSearch}
              // optionKey={"iata_code"}
              optionCount={5}
            />
          </div>
        </Box>
        {/*  date picker and ssearch flight section  */}
        <Box className={classes.searchBtnContainer} component="div">
          <div className={classes.customDatePicker}>
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
