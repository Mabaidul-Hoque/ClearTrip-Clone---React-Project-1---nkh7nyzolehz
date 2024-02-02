import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./FlightPage.css";
import FlightSearch from "./FlightSearchCard/FlightSearch";
import RightSideBar from "./RightSideBarSection/RightSideBar";
import FlightsSearchProvider from "../../UseContext/FlightsSearchProvider";

const Flights = () => {
  return (
    <FlightsSearchProvider>
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
    </FlightsSearchProvider>
  );
};

export default Flights;
