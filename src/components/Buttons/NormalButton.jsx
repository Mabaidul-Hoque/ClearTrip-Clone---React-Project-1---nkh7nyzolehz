import * as React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Button } from "@mui/material";

const LoginButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  backgroundColor: "inherit",
  color: "black",
  border: "none",
  lineHeight: 1.5,
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
    backgroundColor: "#FFFFFF",
    borderColor: "none",
    boxShadow: "none",
    borderColor: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "inherit",
    borderColor: "none",
  },
});

export function NormalButton({ children }) {
  return (
    <Stack spacing={2} direction="row">
      <LoginButton variant="contained" disableRipple>
        {children}
      </LoginButton>
    </Stack>
  );
}
