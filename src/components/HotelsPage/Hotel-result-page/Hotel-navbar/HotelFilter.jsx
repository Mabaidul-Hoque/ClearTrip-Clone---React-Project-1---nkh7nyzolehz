import { Menu, MenuItem, Slider, Stack, Typography } from "@mui/material";
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
    if (applyBtn) {
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
      // console.log("hotels by price high to low  ", resp);
      setTotalHotels(resp.totalResults);
      setHotels(resp.data.hotels);
    });
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
  // usecallback
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

      <StarCategory />

      <FilterByPriceRange />

      {/* <Stack
        className="sort-by-price-range"
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Typography
          sx={{
            marginRight: "20px",
            fontSize: "16px",
            fontw: "700",
            border: "1px solid #D3D3D3",
            padding: "7px 9px",
            borderRadius: "15px",
          }}
        >
          Sort by price range
        </Typography>
        <PrettoSlider
          value={hotelPrice}
          min={4000}
          max={10000}
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          onChange={(e) => {
            setHotelPrice(e.target.value);
            handlePriceRangeFilter();
          }}
        />
      </Stack> */}
    </div>
  );
};

export default HotelFilter;
