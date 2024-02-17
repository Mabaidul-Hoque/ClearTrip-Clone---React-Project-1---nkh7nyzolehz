import React, { useMemo, useState } from "react";
import "../components/HotelsPage/Hotels.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useHotelContext } from "../UseContext/HotelDetailsProvider";

const AddRooms = ({ btnClassName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { roomType, setRoomType } = useHotelContext().roomTypeValues;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className={btnClassName}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {open ? (
          <PersonIcon htmlColor="#3366CC" />
        ) : (
          <PersonOutlineOutlinedIcon htmlColor="#838383" />
        )}
        <span
          style={{ fontSize: "16px", fontWeight: "500 ", marginLeft: "10px" }}
        >
          {roomType}
        </span>
      </button>

      <Menu
        className="menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="menu-item-header">Quick select</MenuItem>
        <MenuItem
          className="menu-item"
          sx={{
            "&:hover": {
              backgroundColor: "#3366CC",
            },
          }}
          onClick={handleClose}
        >
          <span
            onClick={(e) => {
              setRoomType(e.target.innerHTML);
              handleClose();
            }}
          >
            1 Room, 1 Adult
          </span>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{
            "&:hover": {
              backgroundColor: "#3366CC",
            },
          }}
          onClick={handleClose}
        >
          <span
            onClick={(e) => {
              setRoomType(e.target.innerHTML);
              handleClose();
            }}
          >
            1 Room, 2 Adult
          </span>
        </MenuItem>
        <MenuItem
          className="menu-item"
          sx={{
            "&:hover": {
              backgroundColor: "#3366CC",
            },
          }}
          onClick={handleClose}
        >
          <span
            onClick={(e) => {
              setRoomType(e.target.innerHTML);
              handleClose();
            }}
          >
            2 Room, 4 Adult
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AddRooms;
