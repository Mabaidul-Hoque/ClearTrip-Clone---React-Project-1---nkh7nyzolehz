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
import SortByStops from "./SortByStops";

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
  // const [maxTicketPrice, setMaxTicketPrice] = useState(0);
  // const [minTicketPrice, setMinTicketPrice] = useState(10000000);
  const [checkedBox, setCheckedBox] = useState(null);
  const [flightPrice, setHotelprice] = useState();

  const {
    airplaneDetails,
    stopsSortDetails,
    departSortDetails,
    priceSortDetails,
  } = useFlightResult();

  const { setFilterItems, handleFlightResultFilter } = airplaneDetails;

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
  const { handlePricebtn, isPrice } = priceSortDetails;

  useEffect(() => {
    handleFlightResultFilter();
  }, [flightPrice]);

  const handlePriceFilter = () => {
    // setPage(1);
    if (flightPrice >= 1000 && flightPrice <= 10000) {
      // filterItems.ticketPrice = {
      //   $lte: flightPrice,
      //   $gte: 1000,
      // };
      const ticketPrice = {
        $lte: flightPrice,
        $gte: 1000,
      };
      setFilterItems(() => ({ ticketPrice: ticketPrice }));
    }
    handleFlightResultFilter();
  };

  return (
    <div id="left-side-sorting-container">
      <Stack flexDirection={"column"} gap={4}>
        {/* <SortingByStops /> */}

        <SortByStops />

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
                    <span>{flightPrice}</span>
                  </div>
                </Stack>
                <PrettoSlider
                  value={flightPrice}
                  min={2000}
                  max={3000}
                  defaultValue={3000}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  onChange={(e) => {
                    setHotelprice(e.target.value);
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
