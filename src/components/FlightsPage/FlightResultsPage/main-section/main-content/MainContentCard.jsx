import React, { useRef, useState } from "react";
import "../MainSection.css";
import { Button, Stack, styled } from "@mui/material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";

const MainContentCard = ({ airplane }) => {
  const { flightViewDetails } = useFlightResult();
  const { airplaneId, handleId, handleFlightDetails, isOpen } =
    flightViewDetails;

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
            <img
              className="aiplane-logo"
              src="../Assets/vistara-logo2.jpeg"
              alt="vistara-logo"
            />
            <Stack
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              gap={0.3}
            >
              <span className="airplane-name">Vistara</span>
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
          <button style={{ fontSize: "16px" }} className="book-btn">
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
              <img
                id="view-details-logo"
                src="../Assets/vistara-logo2.jpeg"
                alt="vistara-logo"
              />
              <Stack flexDirection={"column"}>
                <span style={{ paddingBottom: "10px" }}>Vistara</span>
                <span style={{ fontSize: "12px" }}>UK-807</span>
                <span style={{ fontSize: "12px", marginBottom: "5px" }}>
                  Economy
                </span>
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
