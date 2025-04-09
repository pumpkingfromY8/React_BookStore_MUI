import React from "react";
import PageTransition from "../components/PageTransition";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample carousel images (mix of portrait & landscape)
const images = [
  { id: 1, src: "/book1.jpg", alt: "Bookstore Interior" },
  { id: 2, src: "/bookstore2.jpg", alt: "Stack of Books" },
  { id: 3, src: "/bookstore3.jpg", alt: "Reading Area" },
  { id: 4, src: "/bookstore4.jpg", alt: "Library Shelf" },
  { id: 5, src: "/bookstore5.jpg", alt: "Book Fair" },
];

const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <PageTransition>
      {/* Full-width Carousel */}
      <Box sx={{ width: "100%", overflow: "hidden", position: "relative",borderRadius: "1rem" }}>
        <Slider {...settings}>
          {images.map((image) => (
            <Box
              key={image.id}
              sx={{
                position: "relative",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Background Image with Dark Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(40%)", // Darkens the image
                }}
              />

              {/* Centered Overlay Text */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Ensures perfect centering
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                  width: "80%",
                }}
              >
                <Typography variant="h3" fontWeight="bold">
                  Welcome to the Book Store E-Marketplace
                </Typography>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Discover, Buy, and Enjoy Your Favorite Books
                </Typography>
                <Button variant="contained" color="primary" size="large">
                  Explore Now
                </Button>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </PageTransition>
  );
};

export default Home;
