import React, { useEffect, useState } from "react";
import ResultNavbar from "./navbar-result/ResultNavbar";
import "./FlightResultPage.css";
import MainSection from "./main-section/MainSection";
import FlightResultProvider from "../../../UseContext/FlightResultProvider";

const FlightResultsPage = () => {
  return (
    <FlightResultProvider>
      <div id="flight-result-page">
        <ResultNavbar />
        <main id="flight-result-main">
          <MainSection />
        </main>
      </div>
    </FlightResultProvider>
  );
};

export default FlightResultsPage;
