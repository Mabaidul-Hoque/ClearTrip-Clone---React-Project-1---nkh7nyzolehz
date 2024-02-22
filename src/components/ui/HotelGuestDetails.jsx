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
import { useHotelContext } from "../../UseContext/HotelDetailsProvider";

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
const HotelGuestDetails = ({ name, setName, contact, setContact }) => {
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState([]);
  const [gfName, setGFName] = useState("");
  const [glName, setGLName] = useState("");
  const [addedGuest, setAddedGuest] = useState(0);
  const gfNameRef = useRef(null);
  const glNameRef = useRef(null);
  const gfullName = gfName + glName;

  const { rooms } = useHotelContext().roomTypeValues;

  const handleDeleteGuest = (item) => {
    setAddedGuest((prev) => prev - 1);
    const updatedGuests = guests.filter((guest) => guest !== item);
    setGuests(updatedGuests);
    notify("One guest is removed successfully");
  };
  const totalGuest = () => {
    const totalAdults = rooms.reduce(
      (acc, currentRoom) => acc + currentRoom.adult,
      0
    );
    const totalChildren = rooms.reduce(
      (acc, currentRoom) => acc + currentRoom.children,
      0
    );
    return totalAdults + totalChildren;
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddGuest = () => {
    setAddedGuest((prev) => prev + 1);
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
      {/* FIRST NAME and LAST NAME INPUTS */}
      <Stack flexDirection={{ xs: "column", sm: "row" }} mt={2} gap={4}>
        {/* <TextField
          type="text"
          id="f-name"
          label="First name"
          className="h-info-input"
          disabled="true"
          defaultValue={JSON.parse(localStorage.getItem("userDetails")).name}
          // onChange={(e) =>
          //   setName((prev) => ({ ...prev, fName: e.target.value }))
          // }
          // value={name?.fName}
        /> */}
        <TextField
          type="text"
          id="l-name"
          className="h-info-input"
          disabled={true}
          defaultValue={JSON.parse(localStorage.getItem("userDetails")).name}
          // onChange={(e) =>
          //   setName((prev) => ({ ...prev, lName: e.target.value }))
          // }
          // value={name?.lName}
        />
      </Stack>

      <Typography mt={2} mb={2}>
        Booking details will be sent to this number and email address
      </Typography>
      {/* PHONE NUMBER AND EMAIL ADDRESS */}
      <Stack flexDirection={{ xs: "column", sm: "row" }} mt={2} gap={4}>
        <Box>
          <TextField
            type="number"
            id="ph-numb"
            label="Enter mobile number"
            className="h-info-input"
            onChange={(e) =>
              setContact((prev) => ({ ...prev, ph: e.target.value }))
            }
            value={contact?.ph}
          />
        </Box>
        <TextField
          type="email"
          id="email"
          className="h-info-input"
          disabled={true}
          defaultValue={JSON.parse(localStorage.getItem("userDetails")).email}
          // onChange={(e) =>
          //   setContact((prev) => ({ ...prev, email: e.target.value }))
          // }
          // value={contact?.email}
        />
      </Stack>
      {/* OTHER GUESTS SECTION */}
      <Box sx={{ display: totalGuest() > 1 ? "block" : "none" }}>
        <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
          Other guests
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You may be required to show name of all guests for Visa purpose
        </Typography>
        <ol className="add-other-guests">
          {/* map all the added guest */}
          {guests.length > 0 &&
            guests?.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center" }}>
                <span>{item}</span>
                <Button onClick={() => handleDeleteGuest(item)}>Delete</Button>
              </li>
            ))}
        </ol>
        <Button
          variant="outlined"
          sx={{ textTransform: "none" }}
          onClick={handleOpen}
        >
          Add new guest
        </Button>
        {/* ADD NEW GUEST MODAL */}
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
                sx={{
                  mt: 10,
                  textAlign: "center",
                  cursor:
                    totalGuest() === addedGuest + 1 ? "no-drop" : "pointer",
                  bgcolor: totalGuest() === addedGuest + 1 ? "lightgray" : "",
                  "&:hover": {
                    bgcolor: totalGuest() === addedGuest + 1 ? "lightgray" : "",
                  },
                }}
                onClick={() => {
                  totalGuest() !== addedGuest + 1 ? handleAddGuest() : "";
                }}
              >
                Add guest
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
      {/* <ToastContainer theme="dark" /> */}
    </>
  );
};

export default HotelGuestDetails;
