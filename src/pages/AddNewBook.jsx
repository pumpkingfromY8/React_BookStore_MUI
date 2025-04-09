import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const AddNewBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    datePublished: "",
    price: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Added:", book);
    navigate("/books"); // Redirect to books page after submission
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 400, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Add New Book
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Author"
            name="author"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Publisher"
            name="publisher"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Date Published"
            name="datePublished"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Price"
            name="price"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Cover Image URL"
            name="cover"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Save Book
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/users")}
              sx={{ mt: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddNewBook;
