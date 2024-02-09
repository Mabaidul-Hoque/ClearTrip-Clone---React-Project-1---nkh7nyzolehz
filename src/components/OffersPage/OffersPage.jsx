import { Box, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OffersPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <Stack gap={4}>
      <nav>
        <Box sx={{ cursor: "pointer" }} onClick={handleNavigation}>
          <img
            src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
            alt="cleartrip-logo"
          />
        </Box>
        <h1 style={{ textAlign: "center" }}>Offer navabr</h1>
      </nav>
      <main style={{ textAlign: "center" }}>
        <h1>offer main content</h1>
      </main>
      <footer style={{ textAlign: "center" }}>
        <h1>offer footeroffer footer</h1>
      </footer>
    </Stack>
  );
};

export default OffersPage;
