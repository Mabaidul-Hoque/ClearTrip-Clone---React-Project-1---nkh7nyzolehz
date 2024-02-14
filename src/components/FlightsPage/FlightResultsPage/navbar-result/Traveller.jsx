import React, { useState, useRef } from "react";
// import "../FlightResultsPage.css";
import MenuList from "@mui/material/MenuList";
import {
  Box,
  Stack,
  Typography,
  Button,
  Grow,
  Paper,
  Popper,
  ClickAwayListener,
} from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Traveller = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [traveller, setTraveller] = useState(1);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Stack direction="column" spacing={2}>
      {/* traveller option btn */}
      <Box
        sx={{
          border: "1px solid #D3D3D3",
          borderRadius: "6px",
        }}
      >
        <Button
          sx={{
            width: {
              xs: "48vw",
              sm: "25vw",
              lg: "12vw",
            },
            height: "40px",
            textTransform: "none",
          }}
          ref={anchorRef}
          variant="outlined"
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <span>{traveller} Traveller</span>
          <ExpandMoreOutlinedIcon htmlColor="#999999" />
        </Button>
      </Box>
      {/* traveller popup */}
      <Popper
        open={open}
        sx={{
          zIndex: "1",
          width: {
            xs: "50vw",
            sm: "23vw",
            lg: "27vw",
          },

          padding: "10px",
        }}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                padding: "10px 20px",
                marginLeft: {
                  xs: "-30vw",
                  lg: "-1vw",
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    <Box>
                      <Typography
                        fontSize={"16px"}
                        fontWeight={"600"}
                        variant="h6"
                      >
                        Adults
                      </Typography>
                      <Typography fontSize={"14px"}>(12+ Years)</Typography>
                    </Box>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          setAdults((prev) => (prev - 1 < 1 ? 1 : prev - 1))
                        }
                      />
                      <span>{adults}</span>
                      <ControlPointOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setAdults((prev) => prev + 1)}
                      />
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    <Box>
                      <Typography
                        fontSize={"16px"}
                        fontWeight={"600"}
                        variant="h6"
                      >
                        Children
                      </Typography>
                      <Typography fontSize={"14px"}>(2 - 12 yrs)</Typography>
                    </Box>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          setChildren((prev) => (prev - 1 < 0 ? 0 : prev - 1))
                        }
                      />
                      <span>{children}</span>
                      <ControlPointOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setChildren((prev) => prev + 1)}
                      />
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    <Box>
                      <Typography
                        fontSize={"16px"}
                        fontWeight={"600"}
                        variant="h6"
                      >
                        Infants
                      </Typography>
                      <Typography fontSize={"14px"}>(Below 2 yrs)</Typography>
                    </Box>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          setInfants((prev) => (prev - 1 < 0 ? 0 : prev - 1))
                        }
                      />
                      <span>{infants}</span>
                      <ControlPointOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setInfants((prev) => prev + 1)}
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <Box
                      mb={2}
                      mt={2.5}
                      component="div"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                      onClick={handleClose}
                    >
                      <Box
                        component="button"
                        sx={{
                          border: "none",
                          borderRadius: "5px",
                          width: "8rem",
                          height: "40px",
                          bgcolor: "green",
                          color: "whitesmoke",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setTraveller(adults + children + infants)
                        }
                      >
                        Update
                      </Box>
                    </Box>
                  </Box>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default Traveller;
