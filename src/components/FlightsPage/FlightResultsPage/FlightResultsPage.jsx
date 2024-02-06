import React, { useEffect, useState } from "react";
import ResultNavbar from "./navbar-result/ResultNavbar";
import "./FlightResultPage.css";
// import MainSection from "./main-section/MainSection";
import FlightResultProvider, {
  useFlightResult,
} from "../../../UseContext/FlightResultProvider";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import { fetchFlights } from "../../../Apis/FlightSearchApi";
import { Stack } from "@mui/material";
import LeftSideSortingBar from "./main-section/left-section/LeftSideSortingBar";
import MainContent from "./main-section/main-content/MainContent";

const FlightResultsPage = () => {
  const { fecthValues, flightPage, totalFlightsVal, setFlightPage } =
    useFlightSearch();
  const { setAirplanes } = fecthValues;
  const { setTotalResult, totalResult } = totalFlightsVal;

  const { airplaneDetails } = useFlightResult();
  const { handleFlightResultFilter } = airplaneDetails;

  useEffect(() => {
    handleFlightResultFilter();
  }, []);

  // const fetchFlightData = () => {
  //   const JSONFilter = JSON.stringify(filterItems);

  //   const sourceVal = localStorage.getItem("source").substring(0, 3);
  //   const destinationVal = localStorage.getItem("destination").substring(0, 3);
  //   const day = localStorage.getItem("day").substring(0, 3);

  //   fetchFlights(
  //     sourceVal,
  //     destinationVal,
  //     day,
  //     5,
  //     flightPage,
  //     JSONFilter
  //   ).then((response) => {
  //     console.log("respone from flight result page", response.totalResults);
  //     setTotalResult(response.totalResults);
  //     setAirplanes(response.data.flights);
  //   });
  // };

  // const handleChange = (event, value) => {
  //   setFlightPage(value);
  //   // handleFlightResultFilter();
  //   // fetchFlightData();
  // };

  console.log("totalResult", totalResult);

  return (
    <FlightResultProvider>
      <div id="flight-result-page">
        <ResultNavbar />
        <main id="flight-result-main">
          {/* <MainSection fetchFlightData={fetchFlightData} /> */}

          <Stack
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={2}
            id="main-section-container"
          >
            <LeftSideSortingBar />
            <MainContent
              totalResult={totalResult}
              // handleChange={handleChange}
            />
          </Stack>
        </main>
      </div>
    </FlightResultProvider>
  );
};

export default FlightResultsPage;
