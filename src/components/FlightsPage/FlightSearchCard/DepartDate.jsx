import React, { useRef, useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";

const DepartDate = () => {
  const { departvalue } = useFlightSearch();
  const { handleDepartDateChange, departDay, departDate, handleClick } =
    departvalue;

  const ExampleCustomInput = forwardRef(({ departDay, onClick }, ref) => (
    <Button
      sx={{
        background: "#FFFFFF",
        color: "#1A1A1A",
        border: "1px solid lightgray",
        borderRadius: "5px",
        textTransform: "none",
        fontSize: "16px",
        "&:focus": {
          borderColor: "#3366CC",
        },
      }}
      className="depart-day-btn"
      onClick={onClick}
      ref={ref}
    >
      {departDay}
    </Button>
  ));
  return (
    <DatePicker
      className="date-picker-btn"
      onClick={handleClick}
      required
      selected={departDate}
      onChange={handleDepartDateChange}
      customInput={<ExampleCustomInput departDay={departDay} />}
    />
  );
};

export default DepartDate;
