import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const LeftButton = styled(Button)({
  color: "#1A1A1A",
  textAlign: "left",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.9rem",
  boxShadow: "none",
  textAlign: "left",
  width: "13rem",
  textTransform: "none",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: 1.7,
  backgroundColor: "inherit",
  border: "none",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    color: "#3366CC",
    backgroundColor: "#EFF5FC",
    boxShadow: "none",
  },
  // "&:active": {
  //   boxShadow: "none",
  //   color: "#3366CC",
  //   backgroundColor: "#0062cc",
  //   borderColor: "#005cbf",
  // },
  // "&:focus": {
  //   backgroundColor: "#D6E8FC",
  //   color: "#3366CC",
  // },
});

export default function SideBarBtns({ children }) {
  return (
    <LeftButton variant="text" disableRipple>
      {children}
    </LeftButton>
  );
}
