import { Typography, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import FlightSearchCard from "./FlightSearchCard";
import PaperCardRecentSearch from "../RecentSearch/PaperCardRecentSearch";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const FlightSearch = () => {
  return (
    <Box component="div">
      <Box
        sx={{
          textAlign: "left",
          mb: {
            xs: 2,
            sm: 4,
          },
        }}
        component="div"
      >
        <Typography
          mb={1}
          sx={{ fontWeight: "500", color: "#1A1A1A" }}
          variant="h4"
        >
          Search flights
        </Typography>
        <Typography gutterBottom sx={{ color: "#1A1A1A", fontWeight: "500" }}>
          Enjoy hassle free bookings with Cleartrip
        </Typography>
      </Box>
      <FlightSearchCard />
      {/* Recent Search Section */}
      <Box mb={4}>
        <Typography
          mb={3}
          mt={5}
          sx={{
            fontWeight: "500",
            color: "#1A1A1A",
            textAlign: "left",
            fontSize: "24px",
          }}
          variant="h4"
        >
          Recent searches
        </Typography>

        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={2}
        >
          <PaperCardRecentSearch width="16vw" height="10vh" borderRadius="7px">
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="recent-search-card"
            >
              <Box>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={1}
                  sx={{ fontWeight: 500 }}
                >
                  <Typography sx={{ fontWeight: 500, fontSize: "14.5px" }}>
                    Bangalor
                  </Typography>
                  <SyncAltIcon fontSize="sm" />
                  <Typography sx={{ fontWeight: 500, fontSize: "14.5px" }}>
                    Mumbai
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: "11px", color: "#969799" }}>
                  Tue, 23 Jan - Fri, 2 Feb
                </Typography>
              </Box>
              <Box>
                <NavigateNextOutlinedIcon htmlColor="#969799" />
              </Box>
            </Stack>
          </PaperCardRecentSearch>
          <PaperCardRecentSearch width="16vw" height="10vh" borderRadius="7px">
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="recent-search-card"
            >
              <Box>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={1}
                  sx={{ fontWeight: 500 }}
                >
                  <Typography sx={{ fontWeight: 500, fontSize: "14.5px" }}>
                    Bangalor
                  </Typography>
                  <SyncAltIcon fontSize="sm" />
                  <Typography sx={{ fontWeight: 500, fontSize: "14.5px" }}>
                    Mumbai
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: "11px", color: "#969799" }}>
                  Tue, 23 Jan - Fri, 2 Feb
                </Typography>
              </Box>
              <Box>
                <NavigateNextOutlinedIcon htmlColor="#969799" />
              </Box>
            </Stack>
          </PaperCardRecentSearch>

          <PaperCardRecentSearch width="16vw" height="10vh" borderRadius="7px">
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="recent-search-card"
            >
              <Box>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={1}
                  sx={{ fontWeight: 500 }}
                >
                  <Typography sx={{ fontWeight: 500, fontSize: "14.5px" }}>
                    Bangalor
                  </Typography>
                  <SyncAltIcon fontSize="sm" />
                  <Typography sx={{ fontWeight: 500, fontSize: "14.5px" }}>
                    Mumbai
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: "11px", color: "#969799" }}>
                  Tue, 23 Jan - Fri, 2 Feb
                </Typography>
              </Box>
              <Box>
                <NavigateNextOutlinedIcon htmlColor="#969799" />
              </Box>
            </Stack>
          </PaperCardRecentSearch>
        </Stack>
      </Box>
    </Box>
  );
};

export default FlightSearch;
