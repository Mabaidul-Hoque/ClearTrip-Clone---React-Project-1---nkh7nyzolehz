import React from "react";
import MenuList from "@mui/material/MenuList";
import { Box, Stack, Typography } from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Button from "@mui/material/Button";

const Traveller = () => {
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
    <Stack direction="column" spacing={2}>
      <Button
        ref={anchorRef}
        variant="outlined"
        sx={{ color: "#1A1A1A" }}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span>1 tarveller</span>
        <ExpandMoreOutlinedIcon htmlColor="#999999" />
      </Button>

      <Popper
        open={open}
        sx={{ zIndex: "1" }}
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
            <Paper>
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
                      <Typography fontSize={"16px"} variant="h6">
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
                      />
                      <span>0</span>
                      <ControlPointOutlinedIcon
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
                      <Typography fontSize={"16px"} variant="h6">
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
                      />
                      <span>0</span>
                      <ControlPointOutlinedIcon
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
                      <Typography fontSize={"16px"} variant="h6">
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
                      />
                      <span>0</span>
                      <ControlPointOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <Box mb={2} mt={2.5} component="div" color="text.secondary">
                      {/* {passengerAddbBtnTexts.map(
                        (passengerAddbBtnText, index) => ( */}
                      <Box
                        component="button"
                        sx={{
                          border: "1px solid lightgray",
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
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
