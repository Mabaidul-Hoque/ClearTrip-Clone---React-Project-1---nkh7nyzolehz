import { Slider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { useDebounce } from "../../../../CustomHooks/useDebouce";

const PrettoSlider = styled(Slider)({
  color: "black",

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

const FilterByPriceRange = () => {
  const [hotelPrice, setHotelPrice] = useState(10000);

  const hotelPriceDebounce = useDebounce(hotelPrice, 500);

  const { filtersData, hotelDetails } = useHotelContext();
  const { setFilterItems, handleHotelFilter } = filtersData;
  const { hotelPage, setHotelPage } = hotelDetails;

  useEffect(() => {
    handleHotelFilter();
  }, [hotelPriceDebounce, hotelPage]);

  const handlePriceRangeFilter = () => {
    setHotelPage(1);
    const newPriceRange = {
      $lte: hotelPrice,
      $gte: 1000,
    };
    setFilterItems((prev) => ({ ...prev, avgCostPerNight: newPriceRange }));
  };

  return (
    <Stack
      className="sort-by-price-range"
      flexDirection={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Typography
        sx={{
          marginRight: "20px",
          fontSize: {
            xs: "14px",
          },
          fontWeight: "500",
          border: "1px solid #D3D3D3",
          padding: {
            xs: "4px 6px",
          },
          borderRadius: "15px",
        }}
      >
        Sort by price range
      </Typography>
      <PrettoSlider
        sx={{
          width: {
            xs: "12rem",
          },
          height: 2,
        }}
        value={hotelPrice}
        min={4000}
        max={10000}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        onChange={(e) => {
          setHotelPrice(e.target.value);
          //   handlePriceRangeFilter();
        }}
        onChangeCommitted={handlePriceRangeFilter}
      />
    </Stack>
  );
};

export default FilterByPriceRange;
