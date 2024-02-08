import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hotels from "./components/HotelsPage/Hotels";
import Flights from "./components/FlightsPage/Flights";
import Offers from "./components/OffersPage/OffersPage";
import MyTrip from "./components/MyTripPage/MyTrip";
import FlightResultsPage from "./components/FlightsPage/FlightResultsPage/FlightResultsPage";
import { FlightsSearchProvider } from "./UseContext/FlightsSearchProvider";
import { HotelDetailsProvider } from "./UseContext/HotelDetailsProvider";
import { OfferDetailsProvider } from "./UseContext/OfferDetailsProvider";
import HotelResultPage from "./components/HotelsPage/Hotel-result-page/HotelResultPage";
import HotelDetailsPage from "./components/HotelsPage/Hotel-result-page/hotel-details-page/HotelDetailsPage";
import AuthorizationProvider from "./UseContext/AuthorizationProvider";
import SignupPage from "./components/Login-signup/SignupPage";
import LoginPage from "./components/Login-signup/LoginPage";
import FlightBookingPage from "./components/FlightsPage/FlightResultsPage/flight-booking-page/FlightBookingPage";
import { theme } from "./util/muiTheme";
import { ThemeProvider } from "@mui/material";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/mytrip",
    element: <MyTrip />,
  },
  {
    path: "/flights/:searchQuery",
    element: <FlightResultsPage />,
  },
  {
    path: "/flights/itinerary/:flightId",
    element: <FlightBookingPage />,
  },
  {
    path: "/hotels/results",
    element: <HotelResultPage />,
  },
  {
    path: "/hotels/results/:userID",
    element: <HotelDetailsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <AuthorizationProvider>
      <OfferDetailsProvider>
        <HotelDetailsProvider>
          <FlightsSearchProvider>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </FlightsSearchProvider>
        </HotelDetailsProvider>
      </OfferDetailsProvider>
    </AuthorizationProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
