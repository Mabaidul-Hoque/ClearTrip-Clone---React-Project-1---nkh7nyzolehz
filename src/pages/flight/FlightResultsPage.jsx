import React from "react";
import ResultNavbar from "../../components/flight-results-page/navbar-result/ResultNavbar";
import "../../styles/flight/FlightResultPage.css";
import { useFlightSearch } from "../../contexts/FlightsSearchProvider";
import { Divider, Stack, ThemeProvider } from "@mui/material";
import LeftSideSortingBar from "../../components/flight-results-page/main-sections/left-section/LeftSideSortingBar";
import MainContent from "../../components/flight-results-page/main-sections/main-content/MainContent";
import { fetchFilteredFlights } from "../../Apis/FlightSearchApi";
import { useParams } from "react-router-dom";
import { CustomTheme } from "../../util/muiTheme";
import Footer from "../../pages/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlightFilterProvider from "../../contexts/FlightFilterProvider";

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
    const source = localStorage.getItem("source");
    const destination = localStorage.getItem("destination");
    const departDay = localStorage.getItem("departDay");

    // Check if the values are not null before calling substring
    const sourceVal = source ? source.substring(0, 3) : "";
    const destinationVal = destination ? destination.substring(0, 3) : "";
    const day = departDay ? departDay.substring(0, 3) : "";
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
