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
import FBConfirmation from "./components/FlightsPage/FlightResultsPage/flight-booking-page/flight-booking-confirmation/FBConfirmation";
import HotelCheckoutPage from "./components/HotelsPage/Hotel-result-page/hotel-details-page/hotel-checkout-page/HotelCheckoutPage";
import { FontProvider } from "./UseContext/FontProvider";
import HotelBookingPage from "./components/HotelsPage/Hotel-result-page/hotel-details-page/hotel-checkout-page/hotel-booking-page/HotelBookingPage";
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
    path: "/flights/flight_booking_confirmation/:flightId",
    element: <FBConfirmation />,
  },
  {
    path: "/hotels/results",
    element: <HotelResultPage />,
  },
  {
    path: "/hotels/results/:hotelID",
    element: <HotelDetailsPage />,
  },
  {
    path: "/hotels/itinerary/:hotelID",
    element: <HotelCheckoutPage />,
  },
  {
    path: "/hotels/HBConfirmation/:hotelID",
    element: <HotelBookingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <FontProvider>
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
  </FontProvider>
  // </React.StrictMode>
);
