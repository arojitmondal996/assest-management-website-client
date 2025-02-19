import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Filter from "../../components/Filter";
import Search from "../../components/Search";

const assets = [
  {
    id: 1,
    name: "Laptop",
    type: "Returnable",
    requestDate: "2023-01-01",
    approvalDate: "",
    status: "Pending",
  },
  {
    id: 2,
    name: "Monitor",
    type: "Non-Returnable",
    requestDate: "2023-01-02",
    approvalDate: "2023-01-05",
    status: "Approved",
  },
  // Add more assets as needed
];

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  header: { fontSize: 18, marginBottom: 10 },
  footer: { fontSize: 12, marginTop: 20, textAlign: "center" },
});

const AssetDocument = ({ asset }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Company Information</Text>
        <Text>Asset Name: {asset.name}</Text>
        <Text>Asset Type: {asset.type}</Text>
        <Text>Request Date: {asset.requestDate}</Text>
        <Text>Approval Date: {asset.approvalDate}</Text>
        <Text>Request Status: {asset.status}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Printing Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

export default function MyAssets() {
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
    // Handle request submission logic here
    console.log("Request submitted for:", selectedAsset, "with note:", note);
    handleClose();
  };

  const handleCancel = (id) => {
    // Handle cancel request logic here
    console.log("Request cancelled for asset id:", id);
  };

  const handleReturn = (id) => {
    // Handle return asset logic here
    console.log("Asset returned for asset id:", id);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <DashboardHeader>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Search query="assetsQ" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Filter filterBy="status" options={["Pending", "Approved"]} />
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
                  <strong>Request Date:</strong> {asset.requestDate}
                </Typography>
                <Typography variant="body1">
                  <strong>Approval Date:</strong> {asset.approvalDate || "N/A"}
                </Typography>
                <Typography variant="body1">
                  <strong>Request Status:</strong> {asset.status}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {asset.status === "Pending" && (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleCancel(asset.id)}>
                      Cancel Request
                    </Button>
                  )}
                  {asset.status === "Approved" && (
                    <>
                      <PDFDownloadLink
                        document={<AssetDocument asset={asset} />}
                        fileName={`${asset.name}-details.pdf`}>
                        {({ loading }) => (
                          <Button variant="contained" color="primary">
                            {loading ? "Loading..." : "Print Details"}
                          </Button>
                        )}
                      </PDFDownloadLink>
                      {asset.type === "Returnable" && (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleReturn(asset.id)}
                          disabled={asset.status === "Returned"}
                          sx={{ ml: 2 }}>
                          Return Asset
                        </Button>
                      )}
                    </>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
