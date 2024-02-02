import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItem, Menu, Slider, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

import "../HotelResultPage.css";
import StarCategory from "./StarCategory";
import { CheckInOutDate } from "../check-in-out-date/CheckInOutDate";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import HotelInputSection from "../../Hotel-search-card/HotelInputSection";
import AddRooms from "../../AddRooms";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { OPTION } from "../../Hotels";

const PrettoSlider = styled(Slider)({
  color: "black",
  width: "20vw",
  height: 2,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
});

const HotelNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { tokenDetails, logSignDetails, handleLogout } = useAuth();
  const { token } = tokenDetails;
  const { handleLoginOpen, setLogInPagePath } = logSignDetails;

  const { recommededFilterInfo, filterbyPriceInfo } = useHotelContext();
  const {
    handleFilterbyPrice,
    handleHotelFilter,
    topRated,
    setTopRated,
    highLow,
    sethighLow,
    lowHigh,
    setLowHigh,
    filterItems,
    handleHighLowBtn,
    handleLowHighBtn,
  } = recommededFilterInfo;
  const { hotelPrice, setHotelPrice, handleHotelPrice } = filterbyPriceInfo;

  const navigate = useNavigate();

  const handleSearch = (value, cb) => {
    // just to explian API call
    let tempOptions = [...OPTION, { name: "piyush" }];
    tempOptions = tempOptions.filter((item) =>
      item["name"]?.toLowerCase().includes(value.toLowerCase())
    );
    // setOptions
    cb(tempOptions);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    handleHotelFilter();
  }, [hotelPrice]);

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
            onSearch={handleSearch}
            optionKey={"name"}
            optionCount={5}
          />
          <CheckInOutDate />
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
      <div id="filter-section">
        <div style={{ color: "#1D74FF", fontSize: "16px", fontWeight: "500" }}>
          All filters
        </div>
        <div className="recommeded-filter">
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="filter-btn"
            onClick={(e) => {
              setTopRated(false);
              sethighLow(false);
              setLowHigh(false);
              handleClick(e);
            }}
          >
            <span>Sort by: Recommended</span>
            {open ? (
              <span>
                <KeyboardArrowDownOutlinedIcon />
              </span>
            ) : (
              <span>
                <KeyboardArrowUpIcon />
              </span>
            )}
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div className="filter-menu">
              <h4 className="sort-menu">Sort hotels by</h4>
              <MenuItem
                className="menu-item"
                onClick={() => {
                  setTopRated(!topRated);
                }}
              >
                {topRated ? (
                  <CheckCircleSharpIcon htmlColor="#00A300" />
                ) : (
                  <CircleOutlinedIcon htmlColor="#DEDEDE" />
                )}

                <span>Top-rated</span>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() => {
                  sethighLow(!highLow);
                  handleHighLowBtn();
                }}
              >
                {highLow ? (
                  <CheckCircleSharpIcon htmlColor="#00A300" />
                ) : (
                  <CircleOutlinedIcon htmlColor="#DEDEDE" />
                )}

                <span>Price: High-low</span>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() => {
                  setLowHigh(!lowHigh);
                  handleLowHighBtn();
                }}
              >
                {lowHigh ? (
                  <CheckCircleSharpIcon htmlColor="#00A300" />
                ) : (
                  <CircleOutlinedIcon htmlColor="#DEDEDE" />
                )}
                <span>Price: Low-high</span>
              </MenuItem>
            </div>
            <li
              onClick={() => {
                handleFilterbyPrice();
                handleClose();
              }}
              className="apply-btn-container"
            >
              <button className="aply-btn">Apply</button>
            </li>
          </Menu>
        </div>
        <StarCategory />
        <Stack
          className="sort-by-price-range"
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Typography sx={{ width: "20vw", fontSize: "16px", fontw: "500" }}>
            Sort by price
          </Typography>
          <PrettoSlider
            value={hotelPrice}
            min={4000}
            max={10000}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            onChange={(e) => {
              setHotelPrice(e.target.value);

              handleHotelPrice();
            }}
          />
        </Stack>
      </div>
    </nav>
  );
};

export default HotelNavbar;
