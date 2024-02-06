import React, { useCallback, useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Stack } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import { useDebounce } from "../../../../../CustomHooks/useDebouce";

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

const SortByPriceRange = () => {
  const [isPrice, setIsPrice] = useState(true);
  const [flightPrice, setFlightPrice] = useState();

  const { airplaneDetails } = useFlightResult();

  const { setFilterItems, handleFlightResultFilter } = airplaneDetails;

  const flightPriceDebounce = useDebounce(flightPrice, 500);

  useEffect(() => {
    // const ticketPrice = {
    //   $lte: flightPriceDebounce,
    //   $gte: 1000,
    // };
    // setFilterItems(() => ({ ticketPrice: ticketPrice }));

    // if (flightPriceDebounce) {
    handleFlightResultFilter();
    // }
  }, [flightPriceDebounce]);

  const handlePricebtn = () => {
    setIsPrice((prev) => !prev);
  };

  const handlePriceFilter = () => {
    // if (flightPrice >= 1000 && flightPrice <= 10000) {
    const ticketPrice = {
      $lte: flightPrice,
      $gte: 1000,
    };
    setFilterItems((prev) => ({ ...prev, ticketPrice: ticketPrice }));
    // }

    // handleFlightResultFilter();
  };

  return (
    <>
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
                value={flightPrice ?? 3000}
                min={1600}
                max={3000}
                defaultValue={3000}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                onChange={(e) => {
                  setFlightPrice(e.target.value);
                  // handlePriceFilter();
                }}
                onChangeCommitted={handlePriceFilter}
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
                <span>1600</span>
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
    </>
  );
};

export default SortByPriceRange;
