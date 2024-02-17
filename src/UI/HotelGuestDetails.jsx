import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CourtesyTitles from "./CourtesyTitles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const HotelGuestDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const fullName = fName + lName;

  const handleAddGuest = () => {};
  return (
    <>
      <Typography variant="h4" mt={4} mb={2}>
        Guest details
      </Typography>
      <CourtesyTitles />
      <Stack flexDirection={"row"} mt={2}>
        <TextField type="text" id="f-name" label="First name" />
        <TextField type="text" id="l-name" label="Last name" />
      </Stack>

      <Typography mt={2} mb={2}>
        Booking details will be sent to this number and email address
      </Typography>
      <Stack flexDirection={"row"} mt={2}>
        <Box>
          {/* ph number country code */}
          <TextField type="number" id="ph-numb" label="Enter mobile number" />
        </Box>
        <TextField type="email" id="email" label="Email address" />
      </Stack>

      <Typography variant="h4">Other guests</Typography>
      <Typography>
        You may be required to show name of all guests for Visa purpose
      </Typography>
      <ul className="add-other-guests">
        {/* map all the added guest */}

        <Button
          variant="outlined"
          sx={{ textTransform: "none" }}
          onClick={handleOpen}
        >
          Add new guest
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Add new guest
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              <CourtesyTitles />
              <TextField
                type="text"
                id="guest-f-name"
                label="Enter first name"
                sx={{ mt: 2, mb: 2, width: "20rem" }}
                onChange={(e) => setFName(e.target.value)}
                value={fName}
              />
              <TextField
                type="text"
                id="guest-l-name"
                label="Enter last name"
                sx={{ width: "20rem" }}
                onChange={(e) => setLName(e.target.value)}
                value={lName}
              />
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{ mt: 10, textAlign: "center" }}
                onClick={handleAddGuest}
              >
                Add guest
              </Button>
            </Box>
          </Box>
        </Modal>
      </ul>
    </>
  );
};

export default HotelGuestDetails;
