import React, { useEffect, useState } from "react";
import FlightBookingNavbar from "./flight-booking-navbar/FlightBookingNavbar";
import { Box, Stack } from "@mui/material";
import BookingDetails from "./flight-booking-main/BookingDetails";
import FlightPriceCard from "./flight-booking-main/FlightPriceCard";
import { fetchSingleFlightDetails } from "../../../../Apis/FlightSearchApi";
import { useParams } from "react-router-dom";
import { useFlightSearch } from "../../../../UseContext/FlightsSearchProvider";

import { airports } from "../../../../util/util";
const FlightBookingPage = () => {
  const [modifiedFlight, setModifiedFlight] = useState({});
  const { setSingleFlight } = useFlightSearch().singleFlightValue;
  const { flightId } = useParams();

  useEffect(() => {
    console.log("flightId", flightId);
    fetchSingleFlightDetails(flightId).then((resp) => {
      console.log("Single flight details:", resp);
      setSingleFlight(resp.data);
    });

    // console.log("airportNames", airportNames);
    // console.log("singleFlight", singleFlight);
    // if (airports.length > 0 && Object.keys(singleFlight).length !== 0) {
    //   const filteredAirport = airports?.filter((airport) => {
    //     return airport.iata_code === singleFlight.source;
    //   });
    //   setModifiedFlight(filteredAirport[0]);
    //   console.log("filteedAirpot:", filteredAirport[0]);
    //   console.log({ filteredAirport, modifiedFlight });
    // } else {
    //   console.log("filter not working");
    //   const filteredAirport = airports?.filter((airport) => {
    //     return airport.iata_code === singleFlight.source;
    //   });
    //   setModifiedFlight(filteredAirport[0]);
    //   console.log("filteedAirpot:", filteredAirport[0]);
    //   console.log({ filteredAirport, modifiedFlight });
    // }

    // handleFlightNameCity();
  }, []);

  // console.log(singleFlight);
  // console.log("airports", airports);

  // const handleFlightNameCity = () => {
  //   const filteredAirport = airports?.filter((airport) => {
  //     console.log("singleFlight source", singleFlight.source);
  //     return airport?.iata_code === singleFlight?.source;
  //   });
  //   console.log("singleFlight", singleFlight);
  //   setModifiedFlight(filteredAirport[0]);
  //   localStorage.setItem("modifiedFlight", JSON.stringify(filteredAirport[0]));
  //   const localData = JSON.parse(localStorage.getItem("modifiedFlight"));
  //   console.log("modifiedFlight:", localData);
  // };

  return (
    <div className="flight-booking-page">
      <FlightBookingNavbar />
      <Box mt={2} mb={4} sx={{ borderBottom: "1px solid #E6E6E6" }}></Box>
      <main id="flight-booking-main">
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          {/* booking details */}
          <div id="booking-details">
            <BookingDetails flightId={flightId} />
          </div>

          {/* price card */}
          <div className="flight-price-card">
            <FlightPriceCard />
          </div>
        </Stack>
      </main>
    </div>
  );
};

export default FlightBookingPage;
