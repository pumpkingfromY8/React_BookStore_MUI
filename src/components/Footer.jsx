import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Youtube from "@mui/icons-material/Youtube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#8B4513", color: "white", py: 4, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {/* Navigation Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none" display="block" sx={{ my: 1 }}>
              Home
            </Link>
            <Link href="/books" color="inherit" underline="none" display="block" sx={{ my: 1 }}>
              Books
            </Link>
            <Link href="/membership" color="inherit" underline="none" display="block" sx={{ my: 1 }}>
              Membership
            </Link>
            <Link href="/mycart" color="inherit" underline="none" display="block" sx={{ my: 1 }}>
              My Cart
            </Link>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ my: 1 }}>
              📍 Del Monte, Veruela, Agusan del Sur
            </Typography>
            <Typography variant="body2" sx={{ my: 1 }}>
              📞 +639702865742
            </Typography>
            <Typography variant="body2" sx={{ my: 1 }}>
              ✉️ erwinkimacarmelotes@asscat.edu.ph
            </Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Typography variant="h6" fontWeight="bold">
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
              <IconButton href="https://www.facebook.com/Duldulao12?mibextid=ZbWKwL" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://youtube.com/@pumpkingfromy8470?si=g4WHW2v6Xoh5tB4Y" color="inherit">
                <Youtube />
              </IconButton>
              <IconButton href="https://www.instagram.com/erwinkimmyy?igsh=OTB6Y2ExZnlnYXF2" color="inherit">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">© {new Date().getFullYear()} Book Store E-Marketplace. All Rights Reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
