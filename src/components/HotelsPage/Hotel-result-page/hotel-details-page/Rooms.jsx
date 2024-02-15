import React from "react";
import { Stack, Paper } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";

const DemoPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid lightgray",
  boxShadow: "none",
  borderRadius: "7px",
  padding: "20px",
}));

const Rooms = ({ singleHotel, hotelID }) => {
  const { token } = useAuth().tokenDetails;
  const navigate = useNavigate();
  const handleHotelBook = (room) => {
    localStorage.setItem("room", JSON.stringify(room));
    console.log("room from rooms", room);
    if (token) {
      navigate(`/hotels/itinerary/${hotelID}`);
    } else {
      notify("Please login first");
    }
  };

  const notify = (text) => toast(text);
  return (
    <div id="rooms">
      <h2>Rooms available</h2>
      <div className="room-cards">
        {singleHotel.rooms &&
          singleHotel.rooms.map((room, indx) => (
            <DemoPaper
              sx={{
                width: {
                  xs: "19rem",
                  sm: "15rem",
                  md: "19rem",
                },
              }}
              key={room._id}
            >
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
                <button
                  className="room-book-btn"
                  onClick={() => handleHotelBook(room)}
                >
                  Book
                </button>
              </Stack>
            </DemoPaper>
          ))}
      </div>
    </div>
  );
};

export default Rooms;
