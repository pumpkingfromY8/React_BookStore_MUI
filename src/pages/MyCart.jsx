import React from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';

// Sample Books Data
const books = [
  {
    id: 1,
    title: "The Great TAE",
    author: "MF. KIMMY ",
    publisher: "Scribner",
    datePublished: "April 10, 1925",
    price: "$10.99",
    cover: "https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/412057058_1566120514213781_4305793258337300326_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE1I-yr1nXLZqVq9NWvA6q7BKOf7nk7HbUEo5_ueTsdtf7JY0GBLwocnZXH88czZdvTYvY2Pe_EAbmzO9OrsQxk&_nc_ohc=K3sSt6quFmoQ7kNvgHPrz36&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=ASwlIxPqLJJ7CiTlFFZ0APY&oh=00_AYBTD4uz0bkF299yOOGY4bsj1EDNOsj2modTrPctqykqlQ&oe=67A3DDAB",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    datePublished: "July 11, 1960",
    price: "$12.99",
    cover: "https://m.media-amazon.com/images/I/81a4kCNuH+L.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    datePublished: "June 8, 1949",
    price: "$9.99",
    cover: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Little, Brown and Company",
    datePublished: "July 16, 1951",
    price: "$11.99",
    cover: "https://m.media-amazon.com/images/I/71dZ2wcfk+L.jpg",
  },
];

const Books = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* Header with "Add New Book" Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 3, px: 3 }}>
        <Typography variant="h4">Books Inside My Cart</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/add-new-book")}>
        <AddIcon />    Add More
        </Button>
      </Box>

      {/* Books Grid */}
      <Grid container spacing={3} justifyContent="center">
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ position: "relative", overflow: "hidden", borderRadius: 2, boxShadow: 3 }}>
                {/* Book Cover */}
                <CardMedia
                  component="img"
                  image={book.cover}
                  alt={book.title}
                  sx={{
                    height: 250,
                    transition: "0.3s ease-in-out",
                  }}
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="body2">Author: {book.author}</Typography>
                  <Typography variant="body2">Publisher: {book.publisher}</Typography>
                  <Typography variant="body2">Published: {book.datePublished}</Typography>
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                    {book.price}
                  </Typography>

                  {/* View Button */}
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2 }}
                    onClick={() => navigate(`/book/${book.id}`)}
                  >
                    View
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </PageTransition>
  );
};

export default Books;
