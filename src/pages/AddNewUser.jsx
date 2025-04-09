import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    email: "",
    access: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Created: ${JSON.stringify(formData, null, 2)}`);
    navigate("/users"); // Redirect to Users Page
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Create New User
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField select label="Gender" name="gender" value={formData.gender} onChange={handleChange} fullWidth required sx={{ mb: 2 }}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField select label="User Access" name="access" value={formData.access} onChange={handleChange} fullWidth required sx={{ mb: 2 }}>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Customer">Customer</MenuItem>
            <MenuItem value="Librarian">Librarian</MenuItem>
            <MenuItem value="Staff">Staff</MenuItem>
          </TextField>

          <Box display="flex" justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate("/users")}>
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddNewUser;
