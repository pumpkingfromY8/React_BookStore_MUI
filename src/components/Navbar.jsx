import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LoginIcon from "@mui/icons-material/Login";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Users", icon: <InfoIcon />, path: "/users" },
    { text: "Books", icon: <BookIcon />, path: "/books" },
    { text: "My Cart", icon: <ShoppingCartIcon />, path: "/mycart" },
    { text: "Membership", icon: <LoyaltyIcon />, path: "/membership" },
    { text: "Login", icon: <LoginIcon />, path: "/login" },
  
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BOOK STORE E-MARKET SYSTEM
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <ListItem key={item.text} sx={{ width: "auto" }}>
                <Link to={item.path} style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center", gap: "8px" }}>
                  {item.icon}
                  {item.text}
                </Link>
              </ListItem>
            ))}
  <Avatar alt="Remy Sharp" src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/412057058_1566120514213781_4305793258337300326_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE1I-yr1nXLZqVq9NWvA6q7BKOf7nk7HbUEo5_ueTsdtf7JY0GBLwocnZXH88czZdvTYvY2Pe_EAbmzO9OrsQxk&_nc_ohc=0KaKLKuGOuAQ7kNvgFslrvb&_nc_zt=23&_nc_ht=scontent.fceb1-2.fna&_nc_gid=AWHJ6wiHSjwZZpQJ7dCnOb-&oh=00_AYCLzb_eNx3jqdeElllPdH-P0zToMAKBsd7XUqWLYZiEtw&oe=67A5D7EB" />

          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <IconButton sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Add margin to the body to prevent content from being hidden behind the fixed navbar */}
      <Box sx={{ height: "64px" }} />
    </>
  );
};

export default Navbar;
