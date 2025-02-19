import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
const packages = [
  { id: 1, members: 5, price: 5 },
  { id: 2, members: 10, price: 8 },
  { id: 3, members: 20, price: 15 },
];

export default function IncreaseLimit() {
  const handleBuyPackage = (pkg) => {
    // Handle buying package logic here
    console.log("Bought package:", pkg);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        Increase Member Limit
      </Typography>

      <Grid container spacing={2}>
        {packages.map((pkg) => (
          <Grid item xs={12} md={4} key={pkg.id}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">
                {pkg.members} members for ${pkg.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleBuyPackage(pkg)}
                sx={{ mt: 2 }}>
                Buy Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
