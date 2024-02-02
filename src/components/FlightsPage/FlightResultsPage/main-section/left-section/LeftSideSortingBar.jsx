import React, { useState, useReducer, useEffect } from "react";
import "./LeftSection.css";
import { Box, Stack } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import SortByAirLines from "./SortByAirLines";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";

const PrettoSlider = styled(Slider)({
  color: "black",
  width: 230,
  height: 2,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
});

const LeftSideSortingBar = () => {
  const [maxTicketPrice, setMaxTicketPrice] = useState(0);
  const [minTicketPrice, setMinTicketPrice] = useState(10000000);

  const {
    airplaneDetails,
    stopsSortDetails,
    departSortDetails,
    priceSortDetails,
  } = useFlightResult();

  const { airplanes, filteredAirplanes } = airplaneDetails;
  const {
    stop,
    handleStopBnt,
    nonStop,
    oneStop,
    twoStop,
    setNonStop,
    setOneStop,
    setTwoStop,
    handleNonStopFilter,
    handleTwoStopFilter,
    handleOneStopFilter,
  } = stopsSortDetails;
  const {
    handleDeparaturebtn,
    isDeparature,
    setIsEarlyMorning,
    isEarlyMorning,
    handleEarlyMorningFilter,
    isMorning,
    setIsMorning,
    handleMorningFilter,
    isAfterNoon,
    setIsAfterNoon,
    handleAfterNoonFilter,
    isEvening,
    setIsEvening,
    handleEveningFilter,
    isNight,
    setIsNight,
    handleNightFilter,
  } = departSortDetails;
  const {
    handlePricebtn,
    isPrice,
    handlePriceChnage,
    rupee,
    handlePriceFilter,
    // maxTicketPrice,
    // minTicketPrice,
  } = priceSortDetails;

  // useEffect(() => {
  //   findMaxMinPriceFlight();
  //   console.log({
  //     maxTicketPrice,
  //     minTicketPrice,
  //   });
  // }, []);
  // const findMaxMinPriceFlight = () => {
  //   let ticketPrices = [];
  //   const interval = setInterval(() => {
  //     if (filteredAirplanes.length < 0) {
  //     } else {
  //       ticketPrices = [...filteredAirplanes];
  //     }
  //   }, [100]);
  //   clearInterval(interval);

  //   const prices = ticketPrices.map((flight) => flight.ticketPrice);
  //   const maxTicketPrice = Math.max(...prices);
  //   const minTicketPrice = Math.min(...prices);
  //   console.log({
  //     ticketPrices,
  //     filteredAirplanes,
  //     prices,
  //     maxTicketPrice,
  //     minTicketPrice,
  //   });
  //   setMaxTicketPrice(maxTicketPrice);
  //   setMinTicketPrice(minTicketPrice);
  // };

  return (
    <div id="left-side-sorting-container">
      <Stack flexDirection={"column"} gap={4}>
        {/* <SortingByStops /> */}
        <Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="sort-by-stops"
            onClick={handleStopBnt}
          >
            <span>Stops</span>
            <span>
              {stop ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </span>
          </Stack>
          {stop ? (
            <Stack justifyContent={"center"} alignItems={"flex-start"} gap={1}>
              <div
                onClick={() => {
                  setNonStop((prev) => !prev);
                  handleNonStopFilter();
                }}
                className="stop-options"
              >
                <input
                  className="stop-input"
                  type="checkbox"
                  value="non-stop"
                  checked={nonStop}
                  onChange={(e) => {}}
                />
                <span>Non-stop</span>
              </div>
              <div
                onClick={() => {
                  setOneStop((prev) => !prev);
                  handleOneStopFilter();
                }}
                className="stop-options"
              >
                <input
                  type="checkbox"
                  value="one-stop"
                  checked={oneStop}
                  onChange={(e) => {}}
                />
                <span>1 stop</span>
              </div>
              <div
                onClick={() => {
                  setTwoStop((prev) => !prev);
                  handleTwoStopFilter();
                }}
                className="stop-options"
              >
                <input
                  type="checkbox"
                  value="two-stop"
                  checked={twoStop}
                  onChange={(e) => {}}
                />
                <span>2 stop</span>
              </div>
            </Stack>
          ) : null}
        </Box>

        {/* <SortByDepartTime /> */}
        <div>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="sort-by-depart-time"
            onClick={handleDeparaturebtn}
          >
            <div>Departure time</div>
            <span>
              {isDeparature ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </span>
          </Stack>
          {isDeparature ? (
            <Stack gap={1}>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="depart-time-options"
                onClick={() => {
                  setIsEarlyMorning((prev) => !prev);
                  handleEarlyMorningFilter();
                }}
              >
                <div className="checkbox-time">
                  <input
                    type="checkbox"
                    checked={isEarlyMorning}
                    value={isEarlyMorning}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <span>Early morning</span>
                </div>
                <span className="flight-time-range">Midnight - 8 am</span>
              </Stack>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="depart-time-options"
                onClick={() => {
                  setIsMorning((prev) => !prev);
                  handleMorningFilter();
                }}
              >
                <div className="checkbox-time">
                  <input
                    type="checkbox"
                    checked={isMorning}
                    value={isMorning}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <span>Morning</span>
                </div>

                <span className="flight-time-range">8 am - Noon</span>
              </Stack>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="depart-time-options"
                onClick={() => {
                  setIsAfterNoon((prev) => !prev);
                  handleAfterNoonFilter();
                }}
              >
                <div className="checkbox-time">
                  <input
                    type="checkbox"
                    checked={isAfterNoon}
                    value={isAfterNoon}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <span>Afternoon</span>
                </div>

                <span className="flight-time-range">Noon - 4 pm</span>
              </Stack>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="depart-time-options"
                onClick={() => {
                  setIsEvening((prev) => !prev);
                  handleEveningFilter();
                }}
              >
                <div className="checkbox-time">
                  <input
                    type="checkbox"
                    checked={isEvening}
                    value={isEvening}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <span>Evening</span>
                </div>

                <span className="flight-time-range">4 pm - 8 pm</span>
              </Stack>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="depart-time-options"
                onClick={() => {
                  setIsNight((prev) => !prev);
                  handleNightFilter();
                }}
              >
                <div className="checkbox-time">
                  <input
                    type="checkbox"
                    checked={isNight}
                    value={isNight}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <span>Night</span>
                </div>

                <span className="flight-time-range">4 pm - Midnight</span>
              </Stack>
            </Stack>
          ) : null}
        </div>

        {/* Sort By Price */}
        <Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="sort-by-price"
            onClick={handlePricebtn}
          >
            <div>One-way price</div>
            <span>
              {isPrice ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </span>
          </Stack>
          {isPrice ? (
            <div id="sort-by-price">
              <Box sx={{ width: 320 }}>
                <Stack>
                  <div>
                    <span>Up to</span>
                    <span>
                      <CurrencyRupeeIcon fontSize="sm" />
                    </span>
                    <span>{rupee}</span>
                  </div>
                </Stack>
                <PrettoSlider
                  value={rupee}
                  min={2000}
                  max={3000}
                  valueLabelDisplay="off"
                  aria-label="pretto slider"
                  onChange={(e) => {
                    handlePriceChnage(e.target.value);
                    handlePriceFilter();
                  }}
                />
              </Box>

              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <div className="price-tag-container">
                  <span className="price-tag">
                    <CurrencyRupeeIcon fontSize="sm" />
                  </span>
                  <span>2000</span>
                </div>
                <div className="price-tag-container">
                  <span className="price-tag">
                    <CurrencyRupeeIcon fontSize="sm" />
                  </span>
                  <span>3000</span>
                </div>
              </Stack>
            </div>
          ) : null}
        </Box>

        {/* Sort By Airlines */}
        <SortByAirLines />
      </Stack>
    </div>
  );
};

export default LeftSideSortingBar;
