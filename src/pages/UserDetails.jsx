import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";

// Sample Users Data (Normally from API)
const users = [
  { id: 1, fullName: "John Doe", gender: "Male", age: 30, email: "johndoe@example.com", access: "Admin", profilePic: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, fullName: "Jane Smith", gender: "Female", age: 25, email: "janesmith@example.com", access: "Customer", profilePic: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, fullName: "Alice Johnson", gender: "Female", age: 40, email: "alicejohnson@example.com", access: "Librarian", profilePic: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: 4, fullName: "Mark Wilson", gender: "Male", age: 35, email: "markwilson@example.com", access: "Staff", profilePic: "https://randomuser.me/api/portraits/men/4.jpg" },
];

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return <Typography variant="h5">User Not Found</Typography>;

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column"  ,position: "relative"}}>
      {/* Back Button */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}
        onClick={() => navigate("/users")}
      >
        ← Back to Users
      </Button>

      {/* Main User Details Layout */}
      <Grid container sx={{ height: "100%" }}>
        {/* Left Side: Profile Picture */}
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}>
          <img
            src={user.profilePic}
            alt={user.fullName}
            style={{ height: "100%",maxHeight: "500px", width: "100%", maxWidth: "900px", borderRadius: "10px", boxShadow: "5px 5px 20px rgba(0,0,0,0.2)",marginBottom:"1rem"  }}
          />
        </Grid>

        {/* Right Side: User Information */}
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          
          <Paper elevation={3} sx={{ padding: 4,width: "90%", maxWidth: "900px", textAlign: "left" ,marginBottom:"1rem" }}>
          <Button
        variant="contained"
        color="secondary"
        sx={{  }}
        onClick={() => navigate("/books")}
       
      >
        EDIT
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ float: "right",backgroundColor:"crimson" }}
        onClick={() => navigate("/books")}
       
      >
        DELETE
      </Button>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>{user.fullName}</Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 1 }}>Gender: <strong>{user.gender}</strong></Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 1 }}>Age: <strong>{user.age}</strong></Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 1 }}>Email: <strong>{user.email}</strong></Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color: "#1976D2" }}>
              User Access: {user.access}


              <Button
        variant="contained"
        color="secondary"
        sx={{ float: "right",backgroundColor:"RED" }}
        onClick={() => navigate("/books")}
       
      >
        REPORT
      </Button>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetails;
