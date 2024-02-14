import {
  Button,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import "../HotelResultPage.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import StarCategory from "./StarCategory";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { fetchSortByPrice } from "../../../../Apis/HotelResulFilterApi";
import FilterByPriceRange from "./FilterByPriceRange";
import { fetchHotels } from "../../../../Apis/HotelDetailsApi";

const HotelFilter = () => {
  const [topRated, setTopRated] = useState(false);
  const [highLow, sethighLow] = useState(false);
  const [lowHigh, setLowHigh] = useState(false);
  const [price, setPrice] = useState(0);
  const [applyBtn, setApplyBtn] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { filtersData, hotelDetails } = useHotelContext();
  const { setFilterItems } = filtersData;
  const { hotelPage, setHotels, setHotelPage, setTotalHotels } = hotelDetails;

  useEffect(() => {
    if (applyBtn && (lowHigh || highLow)) {
      handleFilterbyPrice();
    }
  }, [applyBtn, hotelPage]);

  const handleFilterbyPrice = () => {
    fetchSortByPrice(
      localStorage.getItem("inputPlace"),
      10,
      hotelPage,
      price
    ).then((resp) => {
      setTotalHotels(resp.totalResults);
      setHotels(resp.data.hotels);
    });
  };

  const handleResetFilter = () => {
    fetchHotels(localStorage.getItem("inputPlace"), 10, hotelPage).then(
      (resp) => {
        setTotalHotels(resp.totalResults);
        setHotels(resp.data.hotels);
      }
    );
  };

  const handleStateChange = () => {
    setTopRated(false);
    sethighLow(false);
    setLowHigh(false);
    setApplyBtn(false);
  };

  const handleHighLowBtn = () => {
    setPrice(-1);
  };

  const handleLowHighBtn = () => {
    setPrice(1);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
            handleStateChange();
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
              setHotelPage(1);
              setApplyBtn(true);
              handleClose();
            }}
            className="apply-btn-container"
          >
            <button className="aply-btn">Apply</button>
          </li>
        </Menu>
      </div>
      {/* Sort by rating */}
      <StarCategory />
      {/* Sort by price range */}
      <FilterByPriceRange />

      {/* reset filter */}
      <Button
        variant="contained"
        sx={{ textTransform: "none", ml: 4 }}
        onClick={handleResetFilter}
      >
        Reset filter
      </Button>
    </div>
  );
};

export default HotelFilter;
