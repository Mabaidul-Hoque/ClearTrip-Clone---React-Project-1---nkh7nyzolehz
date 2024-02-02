import React from "react";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";
import { Button } from "@mui/material";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../ResultNavbar.css";

const ReturnDateResult = () => {
  const contextValues = useFlightSearch();
  const { handleReturnDateChange, returnDay, returnDate } =
    contextValues.returnValue;

  const ExampleCustomInput = forwardRef(({ returnDay, onClick }, ref) => (
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
      className="return-date-result"
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

export default ReturnDateResult;
