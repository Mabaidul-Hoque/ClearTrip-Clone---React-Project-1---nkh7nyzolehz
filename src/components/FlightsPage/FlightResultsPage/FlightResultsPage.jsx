import React, { useEffect, useState } from "react";
import ResultNavbar from "./navbar-result/ResultNavbar";
import "./FlightResultPage.css";
import MainSection from "./main-section/MainSection";
import FlightResultProvider from "../../../UseContext/FlightResultProvider";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import { fetchFlights } from "../../../Apis/FlightSearchApi";

const FlightResultsPage = () => {
  const { fecthValues } = useFlightSearch();
  const { setAirplanes } = fecthValues;

  useEffect(() => {
    fetchFlightData();
  }, []);
  const fetchFlightData = () => {
    const sourceVal = localStorage.getItem("source").substring(0, 3);
    const destinationVal = localStorage.getItem("destination").substring(0, 3);
    const day = localStorage.getItem("day").substring(0, 3);

    fetchFlights(sourceVal, destinationVal, day).then((response) => {
      console.log("respone from flight result page", response.data.flights);
      setAirplanes(response.data.flights);
    });
  };

  return (
    <FlightResultProvider>
      <div id="flight-result-page">
        <ResultNavbar fetchFlightData={fetchFlightData} />
        <main id="flight-result-main">
          <MainSection fetchFlightData={fetchFlightData} />
        </main>
      </div>
    </FlightResultProvider>
  );
};

export default FlightResultsPage;
