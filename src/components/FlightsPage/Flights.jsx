import { Stack } from "@mui/material";
import React from "react";
import "./FlightPage.css";
import FlightSearch from "./FlightSearchCard/FlightSearch";
import RightSideBar from "./RightSideBarSection/RightSideBar";

const Flights = () => {
  return (
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
  );
};

export default Flights;
