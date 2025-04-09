import React from "react";
import PageTransition from "../components/PageTransition";
import { Container, TextField, Button, Typography, Box, Paper, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <PageTransition>
      <Container
        maxWidth="xs"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh" }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 2,
            width: "100%",
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: "50%",
              padding: 1.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            <LockIcon fontSize="large" />
          </Box>

          {/* Title */}
          <Typography variant="h5" gutterBottom>
            Sign In to Book Store
          </Typography>

          {/* Email Input */}
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            variant="outlined"
            autoComplete="email"
          />

          {/* Password Input */}
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            autoComplete="current-password"
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2, padding: 1 }}
          >
            Login
          </Button>

          {/* Forgot Password & Sign Up */}
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Paper>
      </Container>
    </PageTransition>
  );
};

export default Login;
