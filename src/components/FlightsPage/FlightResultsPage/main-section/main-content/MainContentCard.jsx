import React, { useEffect, useRef, useState } from "react";
import "../MainSection.css";
import { Button, Stack, styled } from "@mui/material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { planes } from "../../../../../static-data/StaticData";
import { useNavigate } from "react-router-dom";
import { fetchFlightBookingInfo } from "../../../../../Apis/BookingApi";
import { fetchSingleFlightDetails } from "../../../../../Apis/FlightSearchApi";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";

const MainContentCard = ({ airplane, planeLogoName, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [airplaneId, setAirplaneId] = useState(-1);

  const navigate = useNavigate();
  const { singleFlightValue } = useFlightSearch();
  const { setSingleFlight } = singleFlightValue;

  // console.log("planeLogoName", planeLogoName);

  const handleBookBtn = () => {
    fetchSingleFlightDetails(airplane._id).then((resp) => {
      // console.log("Single flight details:", resp);
      setSingleFlight(resp.data);
    });
  };

  const handleId = (value) => {
    setAirplaneId(value);
  };

  const handleFlightDetails = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div id="main-content-card">
      <Stack
        className="initial-card-data"
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack flexDirection={"column"} justifyContent={"space-around"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={1}
            mb={1}
          >
            {index % 2 === 0 ? (
              <img
                className="aiplane-logo"
                src="../assets/plane_logo/vistara-logo2.jpeg"
                alt="vistara-logo2"
              />
            ) : index % 3 === 0 ? (
              <img
                className="aiplane-logo"
                src="../assets/plane_logo/indigo-logo.png"
                alt="indigo-logo"
              />
            ) : index % 5 === 0 ? (
              <img
                className="aiplane-logo"
                src="../assets/plane_logo/air-india-logo.png"
                alt="air-india-logo"
              />
            ) : (
              <img
                className="aiplane-logo"
                src="../assets/plane_logo/spice-jet-logo.png"
                alt="spice-jet-logo"
              />
            )}
            <Stack
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              gap={0.3}
            >
              {index % 2 === 0 ? (
                <span className="airplane-name">Vistara</span>
              ) : index % 3 === 0 ? (
                <span className="airplane-name">IndiGo</span>
              ) : index % 5 === 0 ? (
                <span className="airplane-name">Air India</span>
              ) : (
                <span className="airplane-name">Spice jet</span>
              )}

              {/* <span className="airplane-name">
                {planeLogoName && planeLogoName.name}
              </span> */}
              <span style={{ fontSize: "11px" }}>UK- 807</span>
            </Stack>
          </Stack>

          {airplane.flightID === airplaneId && isOpen ? (
            <button
              className="details-btn"
              onClick={() => {
                handleFlightDetails();
                handleId(airplane.flightID);
              }}
            >
              Hide Details
            </button>
          ) : (
            <button
              className="details-btn"
              onClick={() => {
                handleFlightDetails();
                handleId(airplane.flightID);
              }}
            >
              Flight Details
            </button>
          )}
        </Stack>
        <div className="depart-time">{airplane.departureTime}</div>
        <Stack
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <span className="duration">{airplane.duration} hrs</span>

          <span className="stops">{airplane.stops} stops</span>
        </Stack>
        <div className="arrival-time">{airplane.arrivalTime}</div>
        <Stack
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"flex-end"}
        >
          <span className="available-seat">
            {airplane.availableSeats} seat left
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "cenetr",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "cenetr",
              }}
            >
              <CurrencyRupeeOutlinedIcon fontSize="sm" />
            </span>
            {airplane.ticketPrice}
          </span>
        </Stack>
        <div>
          <button
            style={{ fontSize: "16px" }}
            className="book-btn"
            onClick={() => {
              handleBookBtn();
              navigate(`/flights/itinerary/${airplane._id}`);
            }}
          >
            Book
          </button>
        </div>
      </Stack>
      {airplane.flightID === airplaneId && isOpen ? (
        <div className="view-details-card-data">
          <Stack
            className="view-details-header"
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={2}
          >
            <Stack
              flexDirection={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={0.5}
            >
              <span style={{ fontWeight: 500 }}>{airplane.source}</span>
              <TrendingFlatIcon fontSize="sm" />
              <span style={{ fontWeight: 500 }}>{airplane.destination}</span>
            </Stack>
            <div>{localStorage.getItem("day")}</div>
          </Stack>
          <div className="view-detals-card-content">
            <div className="airplane-logo">
              {/* <img
                id="view-details-logo"
                src="../Assets/plane_logo/vistara-logo2.jpeg"
                alt="vistara-logo"
              /> */}

              {index % 2 === 0 ? (
                <img
                  className="aiplane-logo"
                  src="../assets/plane_logo/vistara-logo2.jpeg"
                  alt="vistara-logo2"
                />
              ) : index % 3 === 0 ? (
                <img
                  className="aiplane-logo"
                  src="../assets/plane_logo/indigo-logo.png"
                  alt="indigo-logo"
                />
              ) : index % 5 === 0 ? (
                <img
                  className="aiplane-logo"
                  src="../assets/plane_logo/air-india-logo.png"
                  alt="air-india-logo"
                />
              ) : (
                <img
                  className="aiplane-logo"
                  src="../assets/plane_logo/spice-jet-logo.png"
                  alt="spice-jet-logo"
                />
              )}

              <Stack flexDirection={"column"}>
                {index % 2 === 0 ? (
                  <>
                    <span style={{ paddingBottom: "10px" }}>Vistara</span>
                    <span style={{ fontSize: "12px" }}>UK-807</span>
                    <span style={{ fontSize: "12px", marginBottom: "5px" }}>
                      Economy
                    </span>
                  </>
                ) : index % 3 === 0 ? (
                  <>
                    <span style={{ paddingBottom: "10px" }}>IndiGo</span>
                    <span style={{ fontSize: "12px" }}>6E-301</span>
                    <span style={{ fontSize: "12px", marginBottom: "5px" }}>
                      Economy
                    </span>
                  </>
                ) : index % 5 === 0 ? (
                  <>
                    <span style={{ paddingBottom: "10px" }}>Air India</span>
                    <span style={{ fontSize: "12px" }}>AI-859</span>
                    <span style={{ fontSize: "12px", marginBottom: "5px" }}>
                      Economy
                    </span>
                  </>
                ) : (
                  <>
                    <span style={{ paddingBottom: "10px" }}>Spice jet</span>
                    <span style={{ fontSize: "12px" }}>SG-8112</span>
                    <span style={{ fontSize: "12px", marginBottom: "5px" }}>
                      Economy
                    </span>
                  </>
                )}

                {/* <span style={{ paddingBottom: "10px" }}>Vistara</span> */}
                {/* <span style={{ fontSize: "12px" }}>UK-807</span>
                <span style={{ fontSize: "12px", marginBottom: "5px" }}>
                  Economy
                </span> */}
              </Stack>
            </div>
            <div className="deparature-details">
              <div className="departure-rource-time">
                <span>{airplane.source}</span>
                <span>{airplane.departureTime}</span>
              </div>
              <div style={{ fontSize: "14px" }}>
                {localStorage.getItem("day")} 2023
              </div>
            </div>
            <div className="duration-time">
              <AccessTimeIcon htmlColor="gray" />
              <span>{airplane.duration}h</span>
            </div>
            <div className="arrival-details">
              <div className="arriavl-dest-time">
                <span>{airplane.destination}</span>
                <span>{airplane.arrivalTime}</span>
              </div>
              <div style={{ fontSize: "14px" }}>
                {localStorage.getItem("day")} 2023
              </div>
            </div>
            <div className="check-in">
              <span>Check-in baggage</span>
              <span>Cabin baggage</span>
            </div>
            <button className="know-more-btn">Know more</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainContentCard;
