import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default function PaperCardRecentSearch({ children }) {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "16vw",
    height: "10vh",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    pl: 4,
    "&:hover": {
      color: "#3366D5",
      background: "#EFF5FC",
    },
    paddingLeft: "30px",
    textAlign: "left",
  }));

  return <DemoPaper variant="outlined">{children}</DemoPaper>;
}
