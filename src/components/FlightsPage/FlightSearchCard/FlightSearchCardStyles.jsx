import React from "react";
import { makeStyles } from "@mui/styles";

const useFlightSectionStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   backgroundColor: theme.palette.primary.main,
  //   color: theme.palette.common.white,
  // },
  passengerAdditon: {
    position: "absolute",
    width: "28vw",
    height: "47vh",
    borderRadius: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
  },
  fareBtnsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "1rem",
  },
  whereFromToContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  whereFromInput: {
    width: "22vw",
    lineHeight: 3,
    paddingLeft: "4rem",
    paddingTop: "0",
    border: "1px solid lightgray",
    fontSize: 16,
    "&::placeholder": {
      color: "#808080",
    },
    "&:focus": {
      border: "1px solid blue",
    },
    "&:active": {
      border: "1px solid blue",
    },
  },
  whereToInput: {
    width: "22vw",
    fontSize: 16,
    lineHeight: 3,
    paddingLeft: "5rem",
    paddingTop: "0",
    border: "1px solid lightgray",
    "&::placeholder": {
      color: "#808080",
    },
  },
  whereToInputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  searchBtnContainer: {
    display: "flex",
    gap: "1rem",
    width: "45vw",
    position: "relative",
  },
  customDatePicker: {
    display: "flex",
  },
  exampleCustomInput: {
    width: "14vw",
    height: "3.5rem",
    background: "#FFFFFF",
    border: "1px solid lightgray",
    borderRadius: "5px",
  },

  passengerAddbBtnContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "1rem",
    flexWrap: "wrap",
  },
  cityAddPopper: {
    position: "absolute",
    left: "30rem",
    top: "19rem",
    width: "27vw",
    height: "43vh",
  },
  recentSearchMiniCard: {
    height: "5rem",
    width: "12rem",
    marginLeft: "-1.2rem",
    marginTop: "-0.5rem",
    marginBottom: "-0.5rem",
  },
  airportNameCard: {
    marginBottom: "12px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "4px",
    "&:hover": {
      color: "black",
      backgroundColor: "#EFF5FC",
      cursor: "pointer",
    },
  },
}));

export default useFlightSectionStyles;
