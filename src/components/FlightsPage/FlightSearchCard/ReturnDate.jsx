import React, { useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";

const ReturnDate = () => {
  const contextValues = useFlightSearch();
  const { handleReturnDateChange, returnDay, returnDate } =
    contextValues.returnValue;

  const ExampleCustomInput = forwardRef(({ returnDay, onClick }, ref) => (
    <Button
      sx={{
        width: {
          xs: "40vw",
          sm: "20vw",
          md: "15vw",
          lg: "14vw",
        },
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
      className="flight-return-day-btn"
      onClick={onClick}
      ref={ref}
    >
      {returnDay}
    </Button>
  ));
  return (
    <DatePicker
      className="date-picker-btn"
      required
      selected={returnDate}
      onChange={handleReturnDateChange}
      customInput={<ExampleCustomInput returnDay={returnDay} />}
    />
  );
};

export default ReturnDate;
