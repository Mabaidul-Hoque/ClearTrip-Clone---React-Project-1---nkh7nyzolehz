import { Stack } from "@mui/material";
import React from "react";
import "../../styles/flight/Flight.css";
import FlightSearch from "../../components/flight-page/flight-search-form/FlightSearch";
import RightSideBar from "../../components/right-side-bar/RightSideBar";

const Flight = () => {
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

export default Flight;
