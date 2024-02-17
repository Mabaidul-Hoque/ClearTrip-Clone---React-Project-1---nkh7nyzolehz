import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CourtesyTitles from "./CourtesyTitles";
import { ToastContainer, toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";

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
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [guests, setGuests] = useState([]);
  const [gfName, setGFName] = useState("");
  const [glName, setGLName] = useState("");
  const gfNameRef = useRef(null);
  const glNameRef = useRef(null);
  const fullName = fName + lName;
  const gfullName = gfName + glName;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddGuest = () => {
    if (gfullName !== "" && gfName !== "" && glName !== "") {
      setGuests((prev) => [...prev, gfullName]);
      notify("Guest added successfully");
      handleClose();
      setGFName("");
      setGLName("");
    } else if (gfName === "" && glName === "") {
      gfNameRef.current.focus();
      notify("Enter the first name!");
    } else if (glName === "") {
      glNameRef.current.focus();
      notify("Enter the last name!");
    } else {
      notify("Fill all the details!");
    }
  };
  const notify = (text) => toast(text);
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
          <TextField
            type="number"
            id="ph-numb"
            label="Enter mobile number"
            onChange={(e) => setFName(e.target.value)}
            value={fName}
          />
        </Box>
        <TextField
          type="email"
          id="email"
          label="Email address"
          onChange={(e) => setLName(e.target.value)}
          value={lName}
        />
      </Stack>

      <Typography variant="h4">Other guests</Typography>
      <Typography>
        You may be required to show name of all guests for Visa purpose
      </Typography>
      <ol className="add-other-guests">
        {/* map all the added guest */}
        {guests.length > 0 && guests?.map((item) => <li key={item}>{item}</li>)}
      </ol>
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
          <Stack flexDirection={"row"} justifyContent={"flex-end"}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Stack>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Add new guest
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 4 }}>
            <CourtesyTitles />
            <TextField
              type="text"
              id="guest-f-name"
              label="Enter first name"
              sx={{ mt: 2, mb: 2, width: "20rem" }}
              onChange={(e) => setGFName(e.target.value)}
              value={gfName}
              inputRef={gfNameRef}
            />
            <TextField
              type="text"
              id="guest-l-name"
              label="Enter last name"
              sx={{ width: "20rem" }}
              onChange={(e) => setGLName(e.target.value)}
              value={glName}
              inputRef={glNameRef}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{ mt: 10, textAlign: "center" }}
              onClick={() => {
                handleAddGuest();
              }}
            >
              Add guest
            </Button>
          </Box>
        </Box>
      </Modal>

      <ToastContainer theme="dark" />
    </>
  );
};

export default HotelGuestDetails;
