import React, { useEffect } from "react";
// import "../../FlightResultsPage.css";
import { Stack, Typography } from "@mui/material";
import { fetchFlights } from "../../../../../Apis/FlightSearchApi";
import MainContentCard from "./MainContentCard";
import Pagination from "@mui/material/Pagination";
import { planes } from "../../../../../static-data/StaticData";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";

// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";
// import Button from "@mui/material/Button";

const MainContent = ({ getFilterFlights, source, dest, departDay }) => {
  const {
    flightPage,
    setFlightPage,
    airplaneDetails,
    totalFlightsVal,
    filterData,
  } = useFlightSearch();
  const { airplanes } = airplaneDetails;
  const { totalResult } = totalFlightsVal;
  const { filterItems } = filterData;

  useEffect(() => {
    getFilterFlights(filterItems);
  }, [flightPage]);

  const handleChange = (event, value) => {
    setFlightPage(value);
  };

  return (
    <div id="main-content-container">
      {/* card content heading */}
      <Stack
        className="card-header"
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={{
          sm: "45vw",
          lg: "33vw",
          xl: "35vw",
        }}
        mt={{
          lg: 3,
        }}
        mb={{
          md: 1,
          lg: 3,
        }}
        display={{
          xs: "none",
          sm: "flex",
        }}
      >
        <Typography ml={-10}>Airlines</Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={{
            sm: "space-between",
          }}
          width={{
            sm: "28vw",
            lg: "20vw",
          }}
        >
          <Typography>Departure</Typography>
          <Typography>Duration</Typography>
        </Stack>
        <Typography>Price</Typography>
      </Stack>
      {/* flight cards */}
      <Stack flexDirection={"column"} gap={2}>
        {airplanes.length > 0 ? (
          airplanes.map((airplane, index) => (
            <MainContentCard
              index={index}
              key={airplane._id + index}
              airplane={airplane}
              planeLogoName={planes[index]}
            />
          ))
        ) : (
          // <Backdrop
          //   sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          //   open
          // >
          //   <CircularProgress color="inherit" />
          // </Backdrop>
          <h1 style={{ textAlign: "center" }}>NO Flights Are Available!!</h1>
        )}
      </Stack>
      {/* pagination */}
      <Stack mt={4} mb={4} flexDirection={"row"} justifyContent={"center"}>
        <div>
          <Pagination
            count={Math.ceil(totalResult / 5)}
            color="primary"
            page={flightPage}
            onChange={handleChange}
          />
        </div>
      </Stack>
    </div>
  );
};

export default MainContent;
