import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// Sample Books Data (Normally from API)
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    datePublished: "April 10, 1925",
    price: "$10.99",
    cover: "https://m.media-amazon.com/images/I/71V7lD1jrxL.jpg",
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

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) return <Typography variant="h5">Book Not Found</Typography>;

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Back Button */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}
        onClick={() => navigate("/books")}
      >
        ← Back to Books
      </Button>

      {/* Main Book Details Layout */}
      <Grid container sx={{ height: "100%" }}>
        {/* Left Side: Book Cover */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <img
            src={book.cover}
            alt={book.title}
            style={{
              height: "100%",
              maxHeight: "500px",
              width: "100%",
              maxWidth: "900px",
              borderRadius: "10px",
              boxShadow: "5px 5px 20px rgba(0,0,0,0.2)",
              marginBottom: "1rem",
            }}
          />
        </Grid>

        {/* Right Side: Book Information */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              width: "90%",
              maxWidth: "900px",
              textAlign: "left",
              marginBottom: "1rem",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{}}
              onClick={() => navigate("/books")}
            >
              <EditIcon /> EDIT
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ float: "right", backgroundColor: "crimson" }}
              onClick={() => navigate("/books")}
            >
              <DeleteIcon /> DELETE
            </Button>

            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              {book.title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 1 }}>
              Author: <strong>{book.author}</strong>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 1 }}>
              Publisher: <strong>{book.publisher}</strong>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 1 }}>
              Published: <strong>{book.datePublished}</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mt: 2, color: "#1976D2" }}
            >
              Price: {book.price}
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              sx={{ float: "right", backgroundColor: "GREEN" }}
              onClick={() => navigate("/books")}
            >
              <AttachMoneyIcon /> BUY
            </Button>

            <Button
              variant="contained"
              color="secondary"
              sx={{
                float: "right",
                backgroundColor: "blue",
                marginRight: "1rem",
              }}
              onClick={() => navigate("/books")}
            >
              <AddShoppingCartIcon /> cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookDetails;
