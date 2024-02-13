import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const otherLinks = [
  "About Us",
  "Careers",
  "FAQs",
  "Support",
  "Collections",
  "Cleartrip for Business",
  "Gift Cards",
];
const Footer = () => {
  return (
    <Box
      id="home-footer"
      sx={{ width: "80%", m: "0 auto", mb: "4rem", mt: "2rem" }}
    >
      <Stack flexDirection={"row"} gap={8}>
        <img
          className="ft-cleartrip-logo"
          src="https://cxotoday.com/wp-content/uploads/2024/02/Cleartrip-logo.png"
          alt="footer-cleartrip-logo"
        />
        <Stack sx={{ width: "75%" }} gap={2}>
          <ul className="other-links">
            {otherLinks.map((item, indx) => (
              <a key={item + indx}>
                <li>{item}</li>
              </a>
            ))}
          </ul>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Typography fontSize={"11px"}>
              © 2024 Cleartrip Pvt. Ltd. · Privacy · Security · Terms of Use ·
              Grievance Redressal
            </Typography>
            <Stack flexDirection={"row"} gap={2}>
              <Typography>Connect</Typography>
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank">
                <XIcon />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <LinkedInIcon />
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
