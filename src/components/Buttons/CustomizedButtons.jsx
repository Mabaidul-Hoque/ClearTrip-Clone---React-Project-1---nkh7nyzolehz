import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export function CustomizedButtons(props) {
  const {
    text,
    fontSize,
    width,
    height,
    lineHeight,
    bgColor,
    border,
    color,
    borderColor,
    borderRadius,
    onHoverBgcolor,
    onHoverColor,
    onFocusBG,
    onFocusColor,
    onFocusBorder,
  } = props;

  const LoginButton = styled(Button)({
    width: `${width}`,
    height: `${height}`,
    boxShadow: "none",
    textTransform: "none",
    fontSize: `${fontSize}`,
    // fontSize: "16px",
    padding: "6px 6px",
    lineHeight: `${lineHeight}`,
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    border: `${border}`,
    borderColor: `${borderColor}`,
    borderRadius: `${borderRadius}`,
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
      backgroundColor: `${onHoverBgcolor}`,
      color: `${onHoverColor}`,
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "none",
      color: "none",
    },
    "&:focus": {
      backgroundColor: `${onFocusBG}`,
      color: `${onFocusColor}`,
      borderColor: `${onFocusBorder}`,
    },
  });

  return (
    <LoginButton variant="contained" disableRipple>
      {text}
    </LoginButton>
  );
}
