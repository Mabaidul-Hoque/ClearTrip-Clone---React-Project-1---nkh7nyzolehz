import React, { useContext, useState } from "react";
import "./NavbarStyles.css";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import { OffersContext } from "../../../UseContext/OfferDetailsProvider";
import { useHotelContext } from "../../../UseContext/HotelDetailsProvider";

const SideNavbar = () => {
  const { setOffersUrlFilter, handleFlightBtn } = useContext(OffersContext);
  const { pathname } = useLocation();
  const { handleHotelBtn } = useHotelContext();

  return (
    <>
      <Box
        pt={4}
        pr={5}
        sx={{ display: "flex", gap: 3, flexDirection: "column" }}
      >
        <Link
          className={
            pathname === "/" || pathname === "/flights"
              ? "leftSection active-left-btn"
              : "leftSection"
          }
          to="/flights"
          onClick={() => {
            setOffersUrlFilter("FLIGHTS");
            handleFlightBtn();
          }}
        >
          <AirplanemodeActiveRoundedIcon fontSize="medium" />
          <span>Flights</span>
        </Link>

        <Link
          className={
            pathname === "/hotels"
              ? "leftSection active-left-btn"
              : "leftSection"
          }
          to="/hotels"
          onClick={() => {
            setOffersUrlFilter("HOTELS");
            handleHotelBtn();
          }}
        >
          <ApartmentRoundedIcon />
          <span>Hotels</span>
        </Link>
        <Link
          className={
            pathname === "/offers"
              ? "leftSection active-left-btn"
              : "leftSection"
          }
          to="/offers"
        >
          <MonetizationOnOutlinedIcon />
          <span>Offers</span>
        </Link>
        <Link
          className={
            pathname === "/mytrip"
              ? "leftSection active-left-btn"
              : "leftSection"
          }
          to="/mytrip"
        >
          <LuggageOutlinedIcon />
          <span>My trips</span>
        </Link>
      </Box>
    </>
  );
};

export default SideNavbar;
