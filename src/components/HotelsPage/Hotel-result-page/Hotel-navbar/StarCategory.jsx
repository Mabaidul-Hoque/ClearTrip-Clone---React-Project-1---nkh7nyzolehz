import React from "react";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Menu from "@mui/material/Menu";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { MenuItem } from "@mui/material";

const StarCategory = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { starFilterInfo, recommededFilterInfo } = useHotelContext();
  const {
    fiveStar,
    setFiveStar,
    fourStar,
    setFourStar,
    threeStar,
    setThreeStar,
    handleFiveStar,
    handleFourStar,
    handleThreeStar,
  } = starFilterInfo;
  const { handleHotelFilter } = recommededFilterInfo;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setFiveStar(false);
    setFourStar(false);
    setThreeStar(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        className="filter-btn"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span>
          <StarsOutlinedIcon fontSize="sm" />
        </span>
        <span>Star category</span>
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
          <h4 className="sort-menu">Star category</h4>
          <MenuItem
            className="menu-item"
            onClick={() => {
              setFiveStar(!fiveStar);
              handleFiveStar();
            }}
          >
            {fiveStar ? (
              <CheckCircleSharpIcon htmlColor="#00A300" />
            ) : (
              <CircleOutlinedIcon htmlColor="#DEDEDE" />
            )}

            <span>5-star</span>
          </MenuItem>
          <MenuItem
            className="menu-item"
            onClick={() => {
              setFourStar(!fourStar);
              handleFourStar();
            }}
          >
            {fourStar ? (
              <CheckCircleSharpIcon htmlColor="#00A300" />
            ) : (
              <CircleOutlinedIcon htmlColor="#DEDEDE" />
            )}

            <span>4-star</span>
          </MenuItem>
          <MenuItem
            className="menu-item"
            onClick={() => {
              setThreeStar(!threeStar);
              handleThreeStar();
            }}
          >
            {threeStar ? (
              <CheckCircleSharpIcon htmlColor="#00A300" />
            ) : (
              <CircleOutlinedIcon htmlColor="#DEDEDE" />
            )}
            <span>3-star</span>
          </MenuItem>
        </div>
        <li className="apply-btn-container">
          <button
            className="aply-btn"
            onClick={() => {
              handleClose();
              handleHotelFilter();
            }}
          >
            Apply
          </button>
        </li>
      </Menu>
    </div>
  );
};

export default StarCategory;
