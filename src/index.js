import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hotels from "./components/HotelsPage/Hotels";
import Flights from "./components/FlightsPage/Flights";
import Offers from "./components/OffersPage/Offers";
import MyTrip from "./components/MyTripPage/MyTrip";
import FlightResultsPage from "./components/FlightsPage/FlightResultsPage/FlightResultsPage";
import { FlightsSearchProvider } from "./UseContext/FlightsSearchProvider";
import { HotelDetailsProvider } from "./UseContext/HotelDetailsProvider";
import { OffersUrlProvider } from "./UseContext/OffersUrlProvider";
import HotelResultPage from "./components/HotelsPage/Hotel-result-page/HotelResultPage";
import HotelDetailsPage from "./components/HotelsPage/Hotel-result-page/hotel-details-page/HotelDetailsPage";
import AuthorizationProvider from "./UseContext/AuthorizationProvider";
import SignupPage from "./components/Login-signup/SignupPage";
import LoginPage from "./components/Login-signup/LoginPage";

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
    path: "/flights/results",
    element: <FlightResultsPage />,
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
  <AuthorizationProvider>
    <OffersUrlProvider>
      <HotelDetailsProvider>
        <FlightsSearchProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </FlightsSearchProvider>
      </HotelDetailsProvider>
    </OffersUrlProvider>
  </AuthorizationProvider>
  // </React.StrictMode>
);
