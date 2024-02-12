import React, { useRef, useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFlightSearch } from "../../../../UseContext/FlightsSearchProvider";

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
  const { departvalue, returnValue } = useFlightSearch();
  const { handleDepartDateChange, departDay, departDate, handleClick } =
    departvalue;
  const { handleReturnDateChange, returnDay, returnDate } = returnValue;

  const CustomInput1 = forwardRef(({ departDay, onClick }, ref) => (
    <CustomButton
      sx={{
        width: {
          xs: "9rem",
        },
      }}
      onClick={onClick}
      ref={ref}
    >
      {departDay}
    </CustomButton>
  ));

  const CustomInput2 = forwardRef(({ returnDay, onClick }, ref) => (
    <CustomButton
      sx={{
        width: {
          xs: "9rem",
        },
      }}
      onClick={onClick}
      ref={ref}
    >
      {returnDay}
    </CustomButton>
  ));

  return (
    <div className="hres-check-in-out-container">
      <DatePicker
        className="date-picker-btn"
        required
        selected={departDate}
        onChange={handleDepartDateChange}
        onClick={handleClick}
        customInput={<CustomInput1 departDay={departDay} />}
      />

      <DatePicker
        className="date-picker-btn"
        required
        selected={returnDate}
        onChange={handleReturnDateChange}
        customInput={<CustomInput2 returnDay={returnDay} />}
      />
    </div>
  );
};
