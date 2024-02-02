import React, { useMemo } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
// import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
// import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
// import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
// import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const AddRooms = ({ width, height }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const style = {
    addRoomBtn: {
      width: `${width}`,
      height: `${height}`,
      border: " 1px solid #D3D3D3",
      borderRadius: "7px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "inherit",
    },
    menu: {
      marginTop: "0px",
    },
    menuItemHeader: {
      width: "18vw",
      marginLeft: "-2px",
      color: "#A3A3A3",
      fontSize: "16px",
      fontWeight: "500",
    },
    menuItem: {
      width: "18vw",
      marginTop: "10px",
      fontSize: "16px",
      fontWeight: "500",
    },
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        style={style.addRoomBtn}
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
        style={style.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem style={style.menuItemHeader}>Quick select</MenuItem>
        <MenuItem
          style={style.menuItem}
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
          style={style.menuItem}
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
          style={style.menuItem}
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
