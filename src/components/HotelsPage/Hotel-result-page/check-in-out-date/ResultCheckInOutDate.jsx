import React, { useRef, useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";

const CustomButton = styled(Button)({
  lineHeight: 2,
  background: "#FFFFFF",
  color: "#1A1A1A",
  border: "1px solid lightgray",
  borderRadius: "5px",
  textTransform: "none",
  fontSize: "16px",
  "&:focus": {
    borderColor: "#3366CC",
  },
});

export const ResultCheckInOutDate = () => {
  const { checkInOutDetails } = useHotelContext();
  const {
    checkInDate,
    checkInDay,
    handleCheckInDateChange,
    checkOutDate,
    checkOutDay,
    handleCheckOutDateChange,
  } = checkInOutDetails;

  const CustomInput1 = forwardRef(({ checkInDay, onClick }, ref) => (
    <CustomButton
      sx={{
        width: {
          xs: "9rem",
        },
      }}
      onClick={onClick}
      ref={ref}
    >
      {checkInDay}
    </CustomButton>
  ));

  const CustomInput2 = forwardRef(({ checkOutDay, onClick }, ref) => (
    <CustomButton
      sx={{
        width: {
          xs: "9rem",
        },
      }}
      onClick={onClick}
      ref={ref}
    >
      {checkOutDay}
    </CustomButton>
  ));

  return (
    <div className="hres-check-in-out-container">
      <DatePicker
        className="date-picker-btn"
        required
        selected={checkInDate}
        onChange={handleCheckInDateChange}
        customInput={<CustomInput1 checkInDay={checkInDay} />}
      />

      <DatePicker
        className="date-picker-btn"
        required
        selected={checkOutDate}
        onChange={handleCheckOutDateChange}
        customInput={<CustomInput2 checkOutDay={checkOutDay} />}
      />
    </div>
  );
};
