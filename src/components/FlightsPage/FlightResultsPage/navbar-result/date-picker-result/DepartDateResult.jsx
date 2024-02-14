import React from "react";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";
import { Button } from "@mui/material";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DepartDateResult = () => {
  const { departvalue } = useFlightSearch();
  const { handleDepartDateChange, departDate, departDay } = departvalue;

  const ResultDepartDate = forwardRef(({ departDay, onClick }, ref) => (
    <Button
      sx={{
        width: {
          xs: "40vw",
          sm: "30vw",
          lg: "12vw",
        },
        height: "40px",
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
      // className="depart-date-result"
      onClick={onClick}
      ref={ref}
    >
      {departDay}
    </Button>
  ));

  return (
    <DatePicker
      className="date-picker-btn"
      required
      selected={departDate}
      onChange={handleDepartDateChange}
      customInput={<ResultDepartDate departDay={departDay} />}
    />
  );
};

export default DepartDateResult;
