import React from "react";
import PageTransition from "../components/PageTransition";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Sample Membership Data
const memberships = [
  {
    id: 1,
    title: "Ordinary Membership",
    description: "Access 10 books with a 10% discount.",
    price: "$5/month",
    icon: <LibraryBooksIcon sx={{ fontSize: 60, color: "#333" }} />,
    benefits: ["✔ 10 Books Included", "✔ 10% Discount"],
    color: "#f5f5f5",
  },
  {
    id: 2,
    title: "Premium Membership",
    description: "More books with higher discounts.",
    price: "$10/month",
    icon: <StarIcon sx={{ fontSize: 60, color: "#fff" }} />,
    benefits: ["✔ 30 Books Included", "✔ 30% Discount", "✔ Exclusive Offers"],
    color: "#FF4500",
  },
  {
    id: 3,
    title: "Golden Membership",
    description: "Selected free books + 70% off all books.",
    price: "$20/month",
    icon: <EmojiEventsIcon sx={{ fontSize: 60, color: "#fff" }} />,
    benefits: ["✔ Selected Free Books", "✔ 70% Discount on All Books", "✔ VIP Support"],
    color: "#FFD700",
  },
];

const Membership = () => {
  return (
    <PageTransition>
      <Box sx={{ textAlign: "center", my: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Choose Your Membership Plan
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray" }}>
          Unlock amazing discounts and exclusive book access.
        </Typography>
      </Box>

      {/* Membership Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ px: 3, marginBottom: "2rem" }}>
        {memberships.map((membership) => (
          <Grid item xs={12} sm={6} md={4} key={membership.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
                borderRadius: 3,
                boxShadow: 5,
                textAlign: "center",
                backgroundColor: membership.color,
              }}
            >
              {/* Membership Icon */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                {membership.icon}
              </Box>

              {/* Membership Details */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" fontWeight="bold">
                  {membership.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "gray", mb: 2 }}>
                  {membership.description}
                </Typography>

                {/* Benefits List */}
                {membership.benefits.map((benefit, index) => (
                  <Typography key={index} variant="body2">
                    {benefit}
                  </Typography>
                ))}

                {/* Membership Price */}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {membership.price}
                </Typography>
              </CardContent>

              {/* Subscribe Button */}
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Subscribe Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageTransition>
  );
};

export default Membership;
