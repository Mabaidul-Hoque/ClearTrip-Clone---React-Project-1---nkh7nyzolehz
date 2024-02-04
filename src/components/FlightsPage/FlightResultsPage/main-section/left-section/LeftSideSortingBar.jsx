import React from "react";
import "./LeftSection.css";
import { Stack } from "@mui/material";
import SortByAirLines from "./SortByAirLines";
import SortByStops from "./SortByStops";
import SortByDeparatureTime from "./SortByDeparatureTime";
import SortByPriceRange from "./SortByPriceRange";

const LeftSideSortingBar = ({ fetchFlightData }) => {
  return (
    <div id="left-side-sorting-container">
      <Stack flexDirection={"column"} gap={4}>
        {/* <SortingByStops /> */}

        <SortByStops fetchFlightData={fetchFlightData} />

        {/* <SortByDepartTime /> */}

        <SortByDeparatureTime fetchFlightData={fetchFlightData} />

        {/* Sort By Price */}

        <SortByPriceRange fetchFlightData={fetchFlightData} />

        {/* Sort By Airlines */}

        <SortByAirLines fetchFlightData={fetchFlightData} />
      </Stack>
    </div>
  );
};

export default LeftSideSortingBar;
