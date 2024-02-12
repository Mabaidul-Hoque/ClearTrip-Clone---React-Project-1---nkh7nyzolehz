import React from "react";
import { Stack, Paper } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import styled from "@emotion/styled";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "26vw",
  //   height: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  border: "1px solid lightgray",
  boxShadow: "none",
  borderRadius: "7px",
  padding: "20px",
}));

const Rooms = ({ singleHotel }) => {
  return (
    <div id="rooms">
      <h2>Rooms available</h2>
      <div className="room-cards">
        {singleHotel.rooms &&
          singleHotel.rooms.map((room, indx) => (
            <DemoPaper key={room._id}>
              <Stack
                justifyContent={"center"}
                alignItems={"flex-start"}
                gap={1}
              >
                <h3>Room Only</h3>
                <div className="bed-details">{room.bedDetail}</div>
                <div>{room.cancellationPolicy}</div>
                <div className="room-price">
                  <CurrencyRupeeIcon fontSize="sm" />
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      paddingRight: "5px",
                    }}
                  >
                    {room.CurrencyRupeeIcon}
                    {room.costPerNight}
                  </span>

                  <span>/ night</span>
                </div>
                <button className="room-book-btn">Book</button>
              </Stack>
            </DemoPaper>
          ))}
      </div>
    </div>
  );
};

export default Rooms;
