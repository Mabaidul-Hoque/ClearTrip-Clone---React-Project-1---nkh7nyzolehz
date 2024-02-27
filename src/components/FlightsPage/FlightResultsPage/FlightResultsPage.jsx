import React from "react";
import ResultNavbar from "./navbar-result/ResultNavbar";
import "./FlightResultPage.css";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import { Divider, Stack, ThemeProvider } from "@mui/material";
import LeftSideSortingBar from "./main-section/left-section/LeftSideSortingBar";
import MainContent from "./main-section/main-content/MainContent";
import { fetchFilteredFlights } from "../../../Apis/FlightSearchApi";
import { useParams } from "react-router-dom";
import { CustomTheme } from "../../../util/muiTheme";
import Footer from "../../FooterPage/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlightFilterProvider from "../../../UseContext/FlightFilterProvider";

const FlightResultsPage = () => {
  const { airplaneDetails, flightPage, totalFlightsVal, loadingData } =
    useFlightSearch();
  const { setAirplanes } = airplaneDetails;
  const { setTotalResult } = totalFlightsVal;
  const { setIsLoading } = loadingData;
  // data extract from url using useParams
  // const { searchQuery } = useParams();
  // const encodedString = searchQuery ?? "";
  // console.log("encodedString", encodedString);
  // const extractedEncodedPath = encodedString.replace("results-", "");
  // const decodedPath = atob(extractedEncodedPath);
  // const [location, date] = decodedPath?.split("--");
  // const [source, dest] = location?.split("-");
  // const [departDay, returnDay] = date?.split("-");

  const handleFlightResultFilter = (filterItems) => {
    const sourceVal = localStorage.getItem("source").substring(0, 3);
    const destinationVal = localStorage.getItem("destination").substring(0, 3);
    const day = localStorage.getItem("departDay").substring(0, 3);
    const JSONFilter = JSON.stringify(filterItems);
    if (filterItems !== undefined) {
      setIsLoading(true);
      fetchFilteredFlights(
        sourceVal,
        destinationVal,
        day,
        5,
        flightPage,
        JSONFilter
      ).then((response) => {
        setTotalResult(response.totalResults);
        setAirplanes(response.data.flights);
        setIsLoading(false);
      });
    }
  };

  return (
    <FlightFilterProvider>
      <ThemeProvider theme={CustomTheme}>
        <div id="flight-result-page">
          <ResultNavbar />

          <Divider sx={{ mt: 2 }} />

          <main id="flight-result-main">
            <Stack
              flexDirection={{
                xxs: "column",
                lg: "row",
              }}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              gap={2}
              id="main-section-container"
            >
              <LeftSideSortingBar getFilterFlights={handleFlightResultFilter} />
              <MainContent getFilterFlights={handleFlightResultFilter} />
            </Stack>
          </main>

          <Footer />
          <ToastContainer />
        </div>
      </ThemeProvider>
    </FlightFilterProvider>
  );
};

export default FlightResultsPage;
