import React, { useEffect, useState } from "react";
import ResultNavbar from "./navbar-result/ResultNavbar";
import "./FlightResultPage.css";
import MainSection from "./main-section/MainSection";

const FlightResultsPage = () => {
  return (
    <div id="flight-result-page">
      <ResultNavbar />
      <main id="flight-result-main">
        <MainSection />
      </main>
    </div>
  );
};

export default FlightResultsPage;
