import React, { useRef, useState } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, ThemeProvider } from "@mui/material";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import { CustomTheme } from "../../../util/muiTheme";

const DepartDate = () => {
  const { departvalue } = useFlightSearch();
  const { handleDepartDateChange, departDay, departDate, handleClick } =
    departvalue;

  const ExampleCustomInput = forwardRef(({ departDay, onClick }, ref) => (
    <Button
      sx={{
        width: {
          xxs: "11rem",
          xs: "10rem",
          smm: "13rem",
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
      {departDay}
    </Button>
  ));
  return (
    <ThemeProvider theme={CustomTheme}>
      <DatePicker
        onClick={handleClick}
        required
        selected={departDate}
        onChange={handleDepartDateChange}
        customInput={<ExampleCustomInput departDay={departDay} />}
      />
    </ThemeProvider>
  );
};

export default DepartDate;
