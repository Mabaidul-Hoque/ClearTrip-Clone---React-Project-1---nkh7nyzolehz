import React from "react";
// import "../../FlightResultsPage.css";
import { Paper, Stack } from "@mui/material";
import SortByAirLines from "./SortByAirLines";
import SortByStops from "./SortByStops";
import SortByDeparatureTime from "./SortByDeparatureTime";
import SortByPriceRange from "./SortByPriceRange";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const LeftSideSortingBar = ({ getFilterFlights }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{
          width: "60vw",
          display: {
            md: "none",
          },
        }}
        variant="outlined"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterAltOutlinedIcon />
        Filter Options
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Paper
          sx={{
            display: {
              xs: "",
            },
            border: "1px solid gary",
            p: 4,
            width: "88vw",
            height: "60vh",
            overflowY: "auto",
          }}
        >
          <Stack flexDirection={"column"} gap={4} sx={{ width: "22%" }}>
            {/* <SortingByStops /> */}

            <SortByStops getFilterFlights={getFilterFlights} />

            {/* <SortByDepartTime /> */}

            <SortByDeparatureTime getFilterFlights={getFilterFlights} />

            {/* Sort By Price */}

            <SortByPriceRange getFilterFlights={getFilterFlights} />

            {/* Sort By Airlines */}

            <SortByAirLines />
          </Stack>
        </Paper>

        <MenuItem onClick={handleClose}>Apply</MenuItem>
      </Menu>
    </div>
  );
};

export default LeftSideSortingBar;
