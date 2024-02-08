import React, { useContext } from "react";
import "./NavbarStyles.css";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import { Link, useLocation } from "react-router-dom";
import { OffersContext } from "../../../UseContext/OfferDetailsProvider";
import { Stack } from "@mui/material";

const SideNavbar = () => {
  const { setOffersUrlFilter } = useContext(OffersContext);
  const { pathname } = useLocation();

  return (
    <Stack
      pt={4}
      pr={5}
      sx={{
        flexDirection: {
          xxs: "row",
          xs: "row",
          sm: "column",
        },
        gap: {
          // xxs: 1,
          // xs: 1,
          sm: 3,
        },
      }}
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
        }}
      >
        <AirplanemodeActiveRoundedIcon fontSize="medium" />
        <span>Flights</span>
      </Link>

      <Link
        className={
          pathname === "/hotels" ? "leftSection active-left-btn" : "leftSection"
        }
        to="/hotels"
        onClick={() => {
          setOffersUrlFilter("HOTELS");
        }}
      >
        <ApartmentRoundedIcon />
        <span>Hotels</span>
      </Link>
      <Link
        className={
          pathname === "/offers" ? "leftSection active-left-btn" : "leftSection"
        }
        to="/offers"
      >
        <MonetizationOnOutlinedIcon />
        <span>Offers</span>
      </Link>
      <Link
        className={
          pathname === "/mytrip" ? "leftSection active-left-btn" : "leftSection"
        }
        to="/mytrip"
      >
        <LuggageOutlinedIcon />
        <span>My trips</span>
      </Link>
    </Stack>
  );
};

export default SideNavbar;
