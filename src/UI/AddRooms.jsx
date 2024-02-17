import React, { useMemo, useState } from "react";
import "../components/HotelsPage/Hotels.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useHotelContext } from "../UseContext/HotelDetailsProvider";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { roomOptions } from "../static-data/StaticData";

const AddRooms = ({ btnClassName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isAddBtn, setIsAddBtn] = useState(false);
  const { roomType, setRoomType } = useHotelContext().roomTypeValues;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsAddBtn(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddMoreBtn = () => {
    setIsAddBtn(true);

  }
  const handleSelectedRoom = (optionVal) => {
    setRoomType(optionVal);
  }

  const getFormatedRoomData = (obj) => (
    <Typography>{obj.room} {obj.room > 1 ? "Rooms" : "Room"} {obj.adult} {obj.adult > 1 ? "Adults": "Adult"} {obj.children > 0 ? obj.children : ""} {obj.children > 1 ? "Children" : (obj.children > 0 ? "Child" : "")}</Typography>
    )

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
          {getFormatedRoomData(roomType)}
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
        sx={{width: "100%"}}
      >
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography>Quick select</Typography>
          <Button sx={{display: isAddBtn ? "block" : "none",}} 
            onClick={() => setIsAddBtn(false)} >Show all options</Button>
        </Stack>
        {/* <MenuItem className="menu-item-header">Quick select</MenuItem> */}
        <Box sx={{display: isAddBtn ? "none" : "block"}}>
          {roomOptions?.map((option) => (
            <MenuItem
            key={option}
            className="menu-item"
            sx={{
              "&:hover": {
                backgroundColor: "#3366CC",
              },
            }}
            onClick={() =>{ 
              handleSelectedRoom(option);
              handleClose() ;
            }}
            >
              {getFormatedRoomData(option)}
            </MenuItem>
          ))}
        </Box>

        <Button sx={{display: isAddBtn ? "none" : "block"}} onClick={handleAddMoreBtn}>Add more rooms and travellers</Button>

        {isAddBtn ? <Divider /> : ""}


        
      </Menu>


    </div>
  );
};

export default AddRooms;
