import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../HotelResultPage.css";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import HotelInputSection from "../../Hotel-search-card/HotelInputSection";
import AddRooms from "../../AddRooms";
import { OPTION } from "../../Hotels";
import HotelFilter from "./HotelFilter";
import { ResultCheckInOutDate } from "../check-in-out-date/ResultCheckInOutDate";

const HotelNavbar = () => {
  const { tokenDetails, logSignDetails, handleLogout } = useAuth();
  const { token } = tokenDetails;
  const { handleLoginOpen, setLogInPagePath } = logSignDetails;

  const navigate = useNavigate();

  return (
    <nav className="hotel-result-navbar">
      <div className="logo-login-section">
        {/* <img src="../../../assets/cleartrip-logo.svg" alt="cleartrip-logo" /> */}
        <Link to="/">
          <img
            className="cleartrip-logo"
            src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
            alt="cleartrip-logo"
          />
        </Link>
        <div className="logo-login-middle">
          <HotelInputSection
            hotelInputClass="hotel-result-input-box"
            options={OPTION}
            noOptionText={"No Match Found"}
            // onSearch={handleSearch}
            optionKey={"name"}
            optionCount={5}
          />
          <ResultCheckInOutDate />
          <AddRooms width="13vw" height="46px" />
        </div>
        <button
          className="hotel-res-login"
          onClick={() => {
            setLogInPagePath("/hotels/results");
            token ? handleLogout() : handleLoginOpen();
            token ? navigate("/") : navigate("/login");
          }}
        >
          {token ? "Log out" : "Log in / Sign up"}
        </button>
      </div>
      {/* filter section */}
      <HotelFilter />
    </nav>
  );
};

export default memo(HotelNavbar);
