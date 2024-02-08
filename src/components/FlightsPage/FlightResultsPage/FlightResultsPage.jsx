import React, { useEffect, useState } from "react";
import ResultNavbar from "./navbar-result/ResultNavbar";
import "./FlightResultPage.css";
import FlightResultProvider from "../../../UseContext/FlightResultProvider";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import { Stack } from "@mui/material";
import LeftSideSortingBar from "./main-section/left-section/LeftSideSortingBar";
import MainContent from "./main-section/main-content/MainContent";
import {
  fetchFilteredFlights,
  fetchFlights,
} from "../../../Apis/FlightSearchApi";
import { useParams } from "react-router-dom";

const FlightResultsPage = () => {
  const { airplaneDetails, flightPage, setFlightPage, totalFlightsVal } =
    useFlightSearch();
  const { setAirplanes } = airplaneDetails;
  const { setTotalResult } = totalFlightsVal;

  const { searchQuery } = useParams();
  const encodedString = searchQuery ?? "";
  console.log("encodedString", encodedString);
  const extractedEncodedPath = encodedString.replace("results-", "");
  const decodedPath = atob(extractedEncodedPath);
  const [location, date] = decodedPath?.split("--");
  const [source, dest] = location?.split("-");
  const [departDay, returnDay] = date?.split("-");

  console.log({ source, dest, departDay });

  const handleFlightResultFilter = (filterItems) => {
    const sourceVal = source.substring(0, 3);
    const destinationVal = dest.substring(0, 3);
    const day = departDay.substring(0, 3);

    const JSONFilter = JSON.stringify(filterItems);
    if (filterItems !== undefined) {
      fetchFilteredFlights(
        sourceVal,
        destinationVal,
        day,
        5,
        flightPage,
        JSONFilter
      ).then((response) => {
        console.log("fetch filtered flights", response);
        setTotalResult(response.totalResults);
        setAirplanes(response.data.flights);
      });
    }
    // if (
    //   filterItems?.stops.length === 0 &&
    //   filterItems?.departureTime.length === 0
    // ) {
    //   fetchFlights(sourceVal, destinationVal, day, 5, flightPage).then(
    //     (response) => {
    //       setTotalResult(response.totalResults);
    //       setAirplanes(response.data.flights);
    //     }
    //   );
    // }
  };

  return (
    // <FlightResultProvider>
    <div id="flight-result-page">
      <ResultNavbar source={source} dest={dest} departDay={departDay} />
      <main id="flight-result-main">
        <Stack
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={2}
          id="main-section-container"
        >
          <LeftSideSortingBar getFilterFlights={handleFlightResultFilter} />
          <MainContent
            source={source}
            dest={dest}
            departDay={departDay}
            getFilterFlights={handleFlightResultFilter}
          />
        </Stack>
      </main>
    </div>
    // </FlightResultProvider>
  );
};

export default FlightResultsPage;
