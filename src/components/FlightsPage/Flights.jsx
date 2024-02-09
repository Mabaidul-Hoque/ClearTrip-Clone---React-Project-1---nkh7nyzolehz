import { Stack } from "@mui/material";
import React from "react";
import "./FlightPage.css";
import FlightSearch from "./FlightSearchCard/FlightSearch";
import RightSideBar from "./RightSideBarSection/RightSideBar";

const Flights = () => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"flex-start"}
      sx={{
        width: "100%",
        gap: {
          md: 4,
          lg: 6,
        },
        justifyContent: {
          xs: "center",
          sm: "flex-start",
        },
        pt: {
          xs: 2,
          sm: 4,
        },
      }}
    >
      <FlightSearch />
      <RightSideBar />
    </Stack>
  );
};

export default Flights;
