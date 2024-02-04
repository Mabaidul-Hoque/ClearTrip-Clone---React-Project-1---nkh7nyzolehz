import React from "react";
import LeftSideSortingBar from "./left-section/LeftSideSortingBar";
import MainContent from "./main-content/MainContent";
import { Stack } from "@mui/material";
import FlightResultProvider from "../../../../UseContext/FlightResultProvider";

const MainSection = ({ fetchFlightData }) => {
  return (
    // <FlightResultProvider>
    <Stack
      flexDirection={"row"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      gap={2}
      id="main-section-container"
    >
      <LeftSideSortingBar fetchFlightData={fetchFlightData} />
      <MainContent />
    </Stack>
    // </FlightResultProvider>
  );
};

export default MainSection;
