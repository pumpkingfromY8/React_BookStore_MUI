import React from "react";
import PageTransition from "../components/PageTransition";
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/More';

// Sample Users Data
const users = [
  { id: 1, fullName: "John Doe", gender: "Male", age: 30, email: "johndoe@example.com", access: "Admin", profilePic: "data:image/jpeg;base64,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" },
  { id: 2, fullName: "Jane Smith", gender: "Female", age: 25, email: "janesmith@example.com", access: "Customer", profilePic: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, fullName: "Alice Johnson", gender: "Female", age: 40, email: "alicejohnson@example.com", access: "Librarian", profilePic: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: 4, fullName: "Mark Wilson", gender: "Male", age: 35, email: "markwilson@example.com", access: "Staff", profilePic: "https://randomuser.me/api/portraits/men/4.jpg" },
];

const Users = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* Header & Create New User Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 3, px: 3 }}>
        <Typography variant="h4">Users</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/add-new-user")}>
     <AddIcon />     Create New User
        </Button>
      </Box>

      {/* Users Grid */}
      <Grid container spacing={3} justifyContent="center">
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ position: "relative", overflow: "hidden", borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image={user.profilePic}
                  alt={user.fullName}
                  sx={{ height: 250, transition: "0.3s ease-in-out" }}
                />

                <motion.div
                  className="overlay"
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
                  <Typography variant="h6">{user.fullName}</Typography>
                  <Typography variant="body2">Gender: {user.gender}</Typography>
                  <Typography variant="body2">Age: {user.age}</Typography>
                  <Typography variant="body2">Email: {user.email}</Typography>
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                    {user.access}
                  </Typography>
                  {/* View User Button */}
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "white", color: "black" }}
                    onClick={() => navigate(`/users/${user.id}`)}
                  >
               View- <MoreIcon />
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

export default Users;
