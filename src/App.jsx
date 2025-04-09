import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
  import AddNewUser from "./pages/AddNewUser";
  import UserDetails from "./pages/UserDetails";
import Books from "./pages/Books";
  import AddNewBook from "./pages/AddNewBook";
  import BookDetails from "./pages/BookDetails";
  import MyCart from "./pages/MyCart";
  import Membership from "./pages/Membership";
import Login from "./pages/Login";

import Footer from "./components/Footer"; // Import Footer

function App() {
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100vh",
          paddingTop: "64px",
        }}
      >
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users />} />
              <Route path="/add-new-user" element={<AddNewUser />} />
              <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/books" element={<Books />} />
              <Route path="/add-new-book" element={<AddNewBook />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/mycart" element={<MyCart />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
        <Footer /> {/* Add Footer Here */}
      </Box>
    </Router>

    
  );
}

export default App;
