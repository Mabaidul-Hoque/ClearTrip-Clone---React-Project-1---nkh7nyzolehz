import React, { useRef, useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, ThemeProvider } from "@mui/material";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import { CustomTheme } from "../../../util/muiTheme";

const DateInputs = () => {
  const { departvalue, returnValue } = useFlightSearch();
  const { handleDepartDateChange, departDay, departDate } = departvalue;
  const { handleReturnDateChange, returnDay, returnDate } = returnValue;
  const DepartDateInput = forwardRef(({ departDay, onClick }, ref) => (
    <Button
      sx={{
        width: {
          xxs: "40vw",
          xs: "45vw",
          sm: "19vw",
          lg: "14vw",
        },
        height: "56px",
        background: "#FFFFFF",
        color: "#1A1A1A",
        border: "1px solid lightgray",
        borderRadius: "5px",
        textTransform: "none",
        paddingLeft: {
          xs: 4,
          sm: 3,
        },
        fontSize: {
          xs: "14px",
          md: "16px",
        },
        "&:focus": {
          borderColor: "#3366CC",
        },
      }}
      onClick={onClick}
      ref={ref}
    >
      {departDay}
    </Button>
  ));
  const ReturnDateInput = forwardRef(({ returnDay, onClick }, ref) => (
    <Button
      sx={{
        width: {
          xxs: "45vw",
          xs: "39.2vw",
          sm: "16vw",
          lg: "12vw",
        },
        height: "56px",
        background: "#FFFFFF",
        color: "#1A1A1A",
        border: "1px solid lightgray",
        borderRadius: "5px",
        textTransform: "none",
        fontSize: {
          xs: "14px",
          md: "16px",
        },
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
        required
        selected={departDate}
        onChange={handleDepartDateChange}
        customInput={<DepartDateInput departDay={departDay} />}
      />

      <DatePicker
        className="date-picker-btn"
        required
        selected={returnDate}
        onChange={handleReturnDateChange}
        customInput={<ReturnDateInput returnDay={returnDay} />}
      />
    </ThemeProvider>
  );
};
export default DateInputs;
