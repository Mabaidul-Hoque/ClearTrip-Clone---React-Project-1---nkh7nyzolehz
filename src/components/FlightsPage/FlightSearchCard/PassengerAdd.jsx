import * as React from "react";
import "../FlightPage.css";
import {
  Box,
  Stack,
  Typography,
  MenuList,
  Grow,
  Paper,
  Popper,
  ClickAwayListener,
} from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const passengerAddbBtnTexts = [
  "Economy",
  "Bussiness class",
  "First class",
  "Premium economy",
];

const PassengerAdd = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [bookingTypeIndex, setTookingTypeIndex] = React.useState(0);

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
    <Stack sx={{ zIndex: 5 }} spacing={2}>
      <div className="card-header">
        <button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {open ? (
            <PersonIcon htmlColor="#999999" />
          ) : (
            <PersonOutlineOutlinedIcon htmlColor="#999999" />
          )}
          <span style={{ fontSize: "16px", fontWeight: "500  " }}>
            1 Adult, Economy
          </span>
          {open ? (
            <ExpandLessOutlinedIcon htmlColor="#999999" />
          ) : (
            <ExpandMoreOutlinedIcon htmlColor="#999999" />
          )}
        </button>
      </div>

      <Popper
        open={open}
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
            <Paper className="passenger-add-container">
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
                        textAlign={"left"}
                        fontSize={"16px"}
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
                        sx={{ cursor: "no-drop" }}
                        htmlColor="#3567CC"
                        fontSize="large"
                      />
                      <span>0</span>
                      <ControlPointOutlinedIcon
                        sx={{ cursor: "no-drop" }}
                        htmlColor="#3567CC"
                        fontSize="large"
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
                        textAlign={"left"}
                        fontSize={"16px"}
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
                        sx={{ cursor: "no-drop" }}
                        htmlColor="#3567CC"
                        fontSize="large"
                      />
                      <span>0</span>
                      <ControlPointOutlinedIcon
                        sx={{ cursor: "no-drop" }}
                        htmlColor="#3567CC"
                        fontSize="large"
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
                        textAlign={"left"}
                        fontSize={"16px"}
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
                        sx={{ cursor: "no-drop" }}
                        htmlColor="#3567CC"
                        fontSize="large"
                      />
                      <span>0</span>
                      <ControlPointOutlinedIcon
                        sx={{ cursor: "no-drop" }}
                        htmlColor="#3567CC"
                        fontSize="large"
                      />
                    </Stack>
                  </Box>
                  {/* fare type btns */}
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                    mb={{
                      xs: 1,
                      sm: 2,
                    }}
                    mt={{
                      xs: 0.5,
                      sm: 2.5,
                    }}
                    component="div"
                    color="text.secondary"
                  >
                    {passengerAddbBtnTexts.map(
                      (passengerAddbBtnText, index) => (
                        <Box
                          component="button"
                          className={
                            bookingTypeIndex === index
                              ? "list-group-item booking-type-btn-active"
                              : "list-group-item"
                          }
                          sx={{
                            fontSize: "12px",
                            border: "1px solid lightgray",
                            "&:hover": {
                              cursor: "pointer",
                            },
                          }}
                          onClick={() => setTookingTypeIndex(index)}
                        >
                          {passengerAddbBtnText}
                        </Box>
                      )
                    )}
                  </Stack>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default PassengerAdd;
