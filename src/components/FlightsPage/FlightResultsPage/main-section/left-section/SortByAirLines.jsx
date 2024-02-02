import React, { useState } from "react";
import "./LeftSection.css";
import { Stack, Typography, Box } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SortByAirLines = () => {
  const { planeSortDetails } = useFlightResult();
  const { handlePlanebtn, isPlane } = planeSortDetails;

  return (
    <div>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className="sort-by-airlines"
        onClick={handlePlanebtn}
      >
        <div>Airlines</div>
        <span>
          {isPlane ? (
            <KeyboardArrowUpOutlinedIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </span>
      </Stack>
      {isPlane ? (
        <Stack gap={1}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                background: "#F7F7F7",
              },
            }}
          >
            <div className="airline-options multi-airline">
              <input type="checkbox" value="checkbox1" />
              <span>Show multi-airline itineraries</span>
            </div>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                background: "#F7F7F7",
              },
            }}
          >
            <div className="airline-options">
              <input type="checkbox" value="checkbox2" />
              <span>Air India</span>
            </div>
            <div className="price-tag-container">
              <span className="price-tag">
                <CurrencyRupeeIcon fontSize="sm" />
              </span>
              <span>10,640</span>
            </div>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                background: "#F7F7F7",
              },
            }}
          >
            <div className="airline-options">
              <input type="checkbox" value="checkbox3" />
              <span>Air India Express</span>
            </div>
            <div className="price-tag-container">
              <span className="price-tag">
                <CurrencyRupeeIcon fontSize="sm" />
              </span>
              <span>14,117</span>
            </div>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                background: "#F7F7F7",
              },
            }}
          >
            <div className="airline-options">
              <input type="checkbox" value="checkbox4" />
              <span>Air India Express</span>
            </div>
            <div className="price-tag-container">
              <span className="price-tag">
                <CurrencyRupeeIcon fontSize="sm" />
              </span>
              <span>12,276</span>
            </div>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                background: "#F7F7F7",
              },
            }}
          >
            <div className="airline-options">
              <input type="checkbox" value="checkbox5" />
              <span>Air India Express</span>
            </div>
            <div className="price-tag-container">
              <span className="price-tag">
                <CurrencyRupeeIcon fontSize="sm" />
              </span>
              <span>15,122</span>
            </div>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                background: "#F7F7F7",
              },
            }}
          >
            <div className="airline-options">
              <input type="checkbox" value="checkbox6" />
              <span>Indigo</span>
            </div>
            <div className="price-tag-container">
              <span className="price-tag">
                <CurrencyRupeeIcon fontSize="sm" />
              </span>
              <span>10,861</span>
            </div>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                background: "#F7F7F7",
              },
            }}
          >
            <div className="airline-options">
              <input type="checkbox" value="checkbox7" />
              <span>Spice Jet</span>
            </div>
            <div className="price-tag-container">
              <span className="price-tag">
                <CurrencyRupeeIcon fontSize="sm" />
              </span>
              <span>18,751</span>
            </div>
          </Stack>
        </Stack>
      ) : null}
    </div>
  );
};

export default SortByAirLines;
