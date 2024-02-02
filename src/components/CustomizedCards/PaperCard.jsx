import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export function PaperCard(props) {
  const { children, width, height, borderRadius } = props;

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: `${width}`,
    height: `${height}`,
    borderRadius: `${borderRadius}`,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "left",
  }));

  return (
    <DemoPaper
      sx={{ display: "flex", flexDirection: "column", gap: "1rem", pl: 4 }}
      variant="outlined"
    >
      {children}
    </DemoPaper>
  );
}
