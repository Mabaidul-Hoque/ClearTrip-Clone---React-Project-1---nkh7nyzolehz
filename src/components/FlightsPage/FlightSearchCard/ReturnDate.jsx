import React, { useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import { CustomTheme } from "../../../util/muiTheme";

const ReturnDate = () => {
  const contextValues = useFlightSearch();
  const { handleReturnDateChange, returnDay, returnDate } =
    contextValues.returnValue;

  const ExampleCustomInput = forwardRef(({ returnDay, onClick }, ref) => (
    <Button
      sx={{
        width: {
          xxs: "9rem",
          xs: "10rem",
          smm: "12.5rem",
          sm: "8rem",
          md: "9.5rem",
          lg: "11.3rem",
          xl: "12.3rem",
        },
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
      }}
      onClick={onClick}
      ref={ref}
    >
      {returnDay}
    </Button>
  ));
  return (
    <ThemeProvider theme={CustomTheme}>
      <DatePicker
        className="date-picker-btn"
        required
        selected={returnDate}
        onChange={handleReturnDateChange}
        customInput={<ExampleCustomInput returnDay={returnDay} />}
      />
    </ThemeProvider>
  );
};

export default ReturnDate;
