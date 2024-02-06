import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./FlightPage.css";
import FlightSearch from "./FlightSearchCard/FlightSearch";
import RightSideBar from "./RightSideBarSection/RightSideBar";
import FlightResultProvider from "../../UseContext/FlightResultProvider";
import { useFlightSearch } from "../../UseContext/FlightsSearchProvider";

const Flights = () => {
  return (
    // <FlightResultProvider>
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      component="div"
      pt={4}
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <FlightSearch />
      <RightSideBar />
    </Stack>
    // </FlightResultProvider>
  );
};

export default Flights;
