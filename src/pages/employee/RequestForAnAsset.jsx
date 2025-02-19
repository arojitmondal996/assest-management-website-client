import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Filter from "../../components/Filter";
import Search from "../../components/Search";

const assets = [
  { id: 1, name: "Laptop", type: "Returnable", availability: "Available" },
  {
    id: 2,
    name: "Monitor",
    type: "Non-Returnable",
    availability: "Out of stock",
  },
  // Add more assets as needed
];

export default function RequestForAnAsset() {
  // const [searchParams] = useSearchParams();
  // const searchTerm = searchParams.get("assetsQ") || "";
  // const filter = searchParams.get("availability") || "";
  // const type = searchParams.get("type") || "";
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  const handleRequestClick = (asset) => {
    setSelectedAsset(asset);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAsset(null);
    setNote("");
  };

  const handleRequestSubmit = () => {
    const requestDate = new Date().toISOString().split("T")[0];
    const user = {
      id: 1, // Replace with actual user ID
      name: "John Doe", // Replace with actual user name
      role: "employee", // Replace with actual user role
    };

    const requestData = {
      assetId: selectedAsset.id,
      assetName: selectedAsset.name,
      assetType: selectedAsset.type,
      requestDate,
      note,
      user,
    };

    // Handle request submission logic here
    console.log("Request submitted:", requestData);
    handleClose();
  };

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <DashboardHeader>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Search query="assetsQ" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Filter
              filterBy="availability"
              options={["Available", "Out of stock"]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Filter
              filterBy="type"
              options={["Returnable", "Non-Returnable"]}
            />
          </Grid>
        </Grid>
      </DashboardHeader>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        Request for an Asset
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Assets List</Typography>
            <Grid container spacing={2}>
              {assets.map((asset) => (
                <Grid item xs={12} md={6} key={asset.id}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="body1">
                      <strong>Asset Name:</strong> {asset.name}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Asset Type:</strong> {asset.type}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Availability:</strong> {asset.availability}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleRequestClick(asset)}
                      disabled={asset.availability === "Out of stock"}>
                      Request
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
          }}>
          <Typography variant="h6" gutterBottom>
            Request Asset
          </Typography>
          <TextField
            fullWidth
            label="Additional Note"
            variant="outlined"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleRequestSubmit}>
            Submit Request
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
