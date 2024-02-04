import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BookingDetails = () => {
  return (
    <div>
      {/* details 1 */}
      <div className="details-one">
        <Stack
          className="details-two"
          mb={4}
          flexDirection={"row"}
          alignItems={"flex-end"}
          gap={2}
        >
          <div class="number-circle">
            <span>1</span>
          </div>
          <h1 style={{ fontWeight: "500" }}>Review your itinerary</h1>
        </Stack>

        <Stack>
          <Stack mb={2} flexDirection={"row"} alignItems={"flex-end"} gap={2}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              sx={{ fontWeight: "600", fontSize: "18px" }}
            >
              New Delhi
              <ArrowForwardIcon fontSize="small" />
              Mumbai
            </Stack>
            <Typography fontSize={"14px"}>Thu, 10 Aug 2023</Typography>
          </Stack>

          <Stack flexDirection={"row"} gap={2}>
            <Stack>
              <img src="" alt="Indigo-logo" />
              <Typography fontSize={"12px"}>IndiGo</Typography>
              <Typography fontSize={"12px"}>6E-2519</Typography>
              <Typography fontSize={"12px"}>Economy</Typography>
            </Stack>

            <div className="dashed-line-container">
              <div className="start-circle"></div>
              <div className="dashed-line"></div>
              <div className="end-circle"></div>
            </div>

            <Stack gap={4}>
              <Typography>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  23:15 DEL{" "}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "500" }}>
                  Indira Gandhi Airport New Delhi, Terminal 2
                </span>
              </Typography>
              <Stack flexDirection={"row"} alignItems={"flex-start"} gap={1}>
                <AccessTimeIcon htmlColor="gray" />
                <span>2h 5m</span>
              </Stack>
              <Typography>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  01:20 BOM{" "}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "500" }}>
                  Chatrapati Shivaji Airport Mumbai, Terminal 2
                </span>
              </Typography>
            </Stack>
          </Stack>

          <Box mt={3} mb={3} sx={{ borderBottom: "1px dotted #E6E6E6" }}></Box>

          <div className="details-two">
            <Stack mb={2} flexDirection={"row"} alignItems={"flex-end"} gap={2}>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                sx={{ fontWeight: "600", fontSize: "18px" }}
              >
                New Delhi
                <ArrowForwardIcon fontSize="small" />
                Mumbai
              </Stack>
              <Typography fontSize={"14px"}>Thu, 10 Aug 2023</Typography>
            </Stack>
            <Stack flexDirection={"row"} gap={2}>
              <Stack>
                <img src="" alt="Indigo-logo" />
                <Typography fontSize={"12px"}>IndiGo</Typography>
                <Typography fontSize={"12px"}>6E-2519</Typography>
                <Typography fontSize={"12px"}>Economy</Typography>
              </Stack>

              <div className="dashed-line-container">
                <div className="start-circle"></div>
                <div className="dashed-line"></div>
                <div className="end-circle"></div>
              </div>

              <Stack gap={4}>
                <Typography>
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    23:15 DEL{" "}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500" }}>
                    Indira Gandhi Airport New Delhi, Terminal 2
                  </span>
                </Typography>
                <Stack flexDirection={"row"} alignItems={"flex-start"} gap={1}>
                  <AccessTimeIcon htmlColor="gray" />
                  <span>2h 5m</span>
                </Stack>
                <Typography>
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    01:20 BOM{" "}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "500" }}>
                    Chatrapati Shivaji Airport Mumbai, Terminal 2
                  </span>
                </Typography>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default BookingDetails;
