import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../MainSection.css";
import { Stack, Typography } from "@mui/material";
import { fetchFlights } from "../../../../../Apis/FlightSearchApi";
import MainContentCard from "./MainContentCard";
import { fetchFlightsByStopsAndDepartTime } from "../../../../../Apis/FlightSearchApi";
import Pagination from "@mui/material/Pagination";

import { planes } from "../../../../../static-data/StaticData";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";

const MainContent = ({ getFilterFlights, source, dest, departDay }) => {
  const {
    flightPage,
    setFlightPage,
    airplaneDetails,
    totalFlightsVal,
    filterData,
    searchPlane,
  } = useFlightSearch();
  const { airplanes, setAirplanes } = airplaneDetails;
  const { totalResult, setTotalResult } = totalFlightsVal;
  const { filterItems } = filterData;

  console.log("totalResult", totalResult);

  useEffect(() => {
    if (filterItems?.stops?.length > 0) {
      getFilterFlights(filterItems);
    } else {
      const sourceVal = source?.substring(0, 3);
      const destinationVal = dest?.substring(0, 3);
      const day = departDay?.substring(0, 3);

      fetchFlights(sourceVal, destinationVal, day, 5, flightPage).then(
        (response) => {
          console.log("flight result page search btn ", response.data.flights);
          setTotalResult(response.totalResults);
          setAirplanes(response.data.flights);
        }
      );
    }
  }, [flightPage]);

  const handleChange = (event, value) => {
    setFlightPage(value);
  };

  return (
    <div id="main-content-container">
      <Stack
        className="card-header"
        flexDirection={"row"}
        justifyContent={"flex-start"}
        gap={15}
        mb={1}
      >
        <Typography ml={-10} sx={{}}>
          Airlines
        </Typography>
        <Stack flexDirection={"row"} gap={6} mr={10}>
          <Typography>Departure</Typography>
          <Typography>Duration</Typography>
        </Stack>
        <Typography sx={{ textAlign: "right" }}>Price</Typography>
      </Stack>
      <Stack flexDirection={"column"} gap={2}>
        {airplanes ? (
          airplanes.map((airplane, index) => (
            <MainContentCard
              index={index}
              key={airplane._id + index}
              airplane={airplane}
              planeLogoName={planes[index]}
            />
          ))
        ) : (
          <h1>NO Flights Are Available!!</h1>
        )}
      </Stack>
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
