import React, { useRef, useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import { useHotelContext } from "../../../UseContext/HotelDetailsProvider";
import { CustomTheme } from "../../../util/muiTheme";

const CustomButton = styled(Button)({
  height: "56px",
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

export const CheckInOutDate = () => {
  const {
    checkInDate,
    checkInDay,
    handleCheckInDateChange,
    checkOutDate,
    checkOutDay,
    handleCheckOutDateChange,
  } = useHotelContext().checkInOutDetails;
  const CheckInDateInput = forwardRef(({ checkInDay, onClick }, ref) => (
    <CustomButton
      ref={ref}
      onClick={onClick}
      sx={{
        width: {
          xs: "45vw",
          sm: "24vw",
          md: "15vw",
        },
        paddingLeft: {
          md: "20px",
          lg: "25px",
          xl: "0px",
        },
      }}
    >
      {checkInDay}
    </CustomButton>
  ));

  const CheckOutDateInput = forwardRef(({ checkOutDay, onClick }, ref) => (
    <CustomButton
      ref={ref}
      onClick={onClick}
      sx={{
        width: {
          xs: "40vw",
          sm: "24vw",
          md: "14vw",
        },
      }}
    >
      {checkOutDay}
    </CustomButton>
  ));

  return (
    <>
      <DatePicker
        required
        selected={checkInDate}
        onChange={handleCheckInDateChange}
        customInput={<CheckInDateInput checkInDay={checkInDay} />}
      />
      <DatePicker
        required
        selected={checkOutDate}
        onChange={handleCheckOutDateChange}
        customInput={<CheckOutDateInput checkOutDay={checkOutDay} />}
      />
    </>
  );
};
