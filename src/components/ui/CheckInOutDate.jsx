import React, { useEffect } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useHotelContext } from "../../contexts/HotelDetailsProvider"; 

const CustomButton = styled(Button)({
  background: "#FFFFFF",
  color: "#1A1A1A",
  border: "1px solid lightgray",
  textTransform: "none",
  fontSize: "16px",
  "&:focus": {
    borderColor: "#3366CC",
  },
});

export const CheckInOutDate = ({ dateClass }) => {
  const {
    checkInDate,
    handleCheckInDateChange,
    checkOutDate,
    handleCheckOutDateChange,
  } = useHotelContext().checkInOutDetails;

  const formatDate = (inputDate) => {
    const options = { day: "2-digit", weekday: "short", month: "short" };
    const date = new Date(inputDate);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // console.log({
  //   checkInDate,
  //   checkLS: JSON.parse(localStorage.getItem("checkInDate")),
  // });
  const CheckInDateInput = forwardRef(({ onClick }, ref) => (
    <CustomButton ref={ref} onClick={onClick} className={dateClass}>
      {formatDate(checkInDate)}
      {/* {formatDate(JSON.parse(localStorage.getItem("checkInDate")))} */}
    </CustomButton>
  ));

  const CheckOutDateInput = forwardRef(({ onClick }, ref) => (
    <CustomButton ref={ref} onClick={onClick} className={dateClass}>
      {formatDate(checkOutDate)}
      {/* {formatDate(JSON.parse(localStorage.getItem("checkOutDate")))} */}
    </CustomButton>
  ));

  return (
    <>
      <DatePicker
        required
        selected={checkInDate}
        onChange={handleCheckInDateChange}
        customInput={<CheckInDateInput />}
      />
      <DatePicker
        required
        selected={checkOutDate}
        onChange={handleCheckOutDateChange}
        customInput={<CheckOutDateInput />}
      />
    </>
  );
};
