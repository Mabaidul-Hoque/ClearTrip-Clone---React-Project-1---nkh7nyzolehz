import React from "react";
// import "../FlightResultsPage.css";
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
import styled from "@emotion/styled";

// const TravellerPaper = styled(Button)({
//   border: "1px solid #D3D3D3",
//   height: "42px",
// });

const Traveller = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
    <Stack border={"1px solid lightgray"} direction="column" spacing={2}>
      {/* <TravellerPaper> */}
      <Button
        ref={anchorRef}
        variant="outlined"
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span>1 tarveller</span>
        <ExpandMoreOutlinedIcon htmlColor="#999999" />
      </Button>
      {/* </TravellerPaper> */}

      <Popper
        open={open}
        sx={{ zIndex: "1", width: "23vw", padding: "10px" }}
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
                marginLeft: "-16px",
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
                      />
                      <span>0</span>
                      <ControlPointOutlinedIcon
                        htmlColor="#3567CC"
                        fontSize="large"
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
