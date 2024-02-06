import React from "react";
import "./LeftSection.css";
import { Stack } from "@mui/material";
import SortByAirLines from "./SortByAirLines";
import SortByStops from "./SortByStops";
import SortByDeparatureTime from "./SortByDeparatureTime";
import SortByPriceRange from "./SortByPriceRange";

const LeftSideSortingBar = () => {
  return (
    <div id="left-side-sorting-container">
      <Stack flexDirection={"column"} gap={4}>
        {/* <SortingByStops /> */}

        <SortByStops />

        {/* <SortByDepartTime /> */}

        <SortByDeparatureTime />

        {/* Sort By Price */}

        <SortByPriceRange />

        {/* Sort By Airlines */}

        <SortByAirLines />
      </Stack>
    </div>
  );
};

export default LeftSideSortingBar;
