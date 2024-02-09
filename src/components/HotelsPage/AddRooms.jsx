import React, { useMemo } from "react";
import "./Hotels.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const AddRooms = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="add-room-btn"
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
          1 Room, 2 Adult
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
          1 Room, 1 Adult
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
          1 Room, 2 Adult
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
          2 Room, 4 Adult
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AddRooms;
