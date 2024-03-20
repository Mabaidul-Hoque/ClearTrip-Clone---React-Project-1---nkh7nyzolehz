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
import { FlightsSearchProvider } from "./contexts/FlightsSearchProvider";
import { HotelDetailsProvider } from "./contexts/HotelDetailsProvider";
import { OfferDetailsProvider } from "./contexts/OfferDetailsProvider";
import HotelResultPage from "./components/HotelsPage/Hotel-result-page/HotelResultPage";
import HotelDetailsPage from "./components/HotelsPage/Hotel-result-page/hotel-details-page/HotelDetailsPage";
import AuthorizationProvider from "./contexts/AuthorizationProvider";
import FlightBookingPage from "./components/FlightsPage/FlightResultsPage/flight-booking-page/FlightBookingPage";
import HotelCheckoutPage from "./components/HotelsPage/Hotel-result-page/hotel-details-page/hotel-checkout-page/HotelCheckoutPage";
import { FontProvider } from "./contexts/FontProvider";
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
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/mytrip",
    element: <MyTrip />,
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
