import React, { useCallback, useEffect, useState } from "react";
import "../MainSection.css";
import { Stack } from "@mui/material";
import { fetchFlights } from "../../../../../Apis/FlightSearchApi";
import MainContentCard from "./MainContentCard";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import { fetchFlightsByStopsAndDepartTime } from "../../../../../Apis/FlightSearchApi";

const MainContent = () => {
  const { airplaneDetails, stopsSortDetails, departSortDetails } =
    useFlightResult();
  const {
    sourceVal,
    destinationVal,
    dayVal,
    airplanes,
    setAirplanes,
    filteredAirplanes,
    setFilteredAirplanes,
    handleFlightResultFilter,
  } = airplaneDetails;
  const { nonStop, oneStop, twoStop } = stopsSortDetails;
  const { isEarlyMorning, isMorning, isAfterNoon, isEvening, isNight } =
    departSortDetails;

  console.log("filterAirplane", filteredAirplanes);
  // console.log("Airplane", airplanes);

  useEffect(() => {
    console.log("main content useeffect");
    handleFlightResultFilter();
  }, []);
  return (
    <div id="main-content-container">
      <Stack flexDirection={"column"} gap={2}>
        {(filteredAirplanes ? filteredAirplanes : airplanes).map(
          (airplane, index) => (
            <MainContentCard
              index={index}
              key={airplane._id + index}
              airplane={airplane}
            />
          )
        )}
      </Stack>
    </div>
  );
};

export default MainContent;
