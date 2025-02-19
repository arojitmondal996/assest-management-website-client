import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Search from "../../components/Search";

const initialRequests = [
  {
    id: 1,
    assetName: "Laptop",
    assetType: "Returnable",
    email: "john.doe@example.com",
    requesterName: "John Doe",
    requestDate: "2023-01-01",
    note: "Need for project",
    status: "Pending",
  },
  {
    id: 2,
    assetName: "Monitor",
    assetType: "Non-Returnable",
    email: "jane.smith@example.com",
    requesterName: "Jane Smith",
    requestDate: "2023-01-02",
    note: "For new setup",
    status: "Pending",
  },
  // Add more requests as needed
];

export default function AllRequests() {
  const [requests, setRequests] = useState(initialRequests);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleApprove = (id) => {
    // Handle approve logic here
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleReject = (id) => {
    // Handle reject logic here
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Rejected" } : request
      )
    );
  };

  const filteredRequests = requests.filter(
    (request) =>
      request.requesterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <DashboardHeader>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Search query="requesterQ" />
          </Grid>
        </Grid>
      </DashboardHeader>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        All Requests
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Request List</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Asset Name</TableCell>
                    <TableCell>Asset Type</TableCell>
                    <TableCell>Email of Requester</TableCell>
                    <TableCell>Name of Requester</TableCell>
                    <TableCell>Request Date</TableCell>
                    <TableCell>Additional Note</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.assetName}</TableCell>
                      <TableCell>{request.assetType}</TableCell>
                      <TableCell>{request.email}</TableCell>
                      <TableCell>{request.requesterName}</TableCell>
                      <TableCell>{request.requestDate}</TableCell>
                      <TableCell>{request.note}</TableCell>
                      <TableCell>{request.status}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleApprove(request.id)}
                          disabled={request.status !== "Pending"}
                          size="small">
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleReject(request.id)}
                          disabled={request.status !== "Pending"}
                          sx={{ ml: 2 }}
                          size="small">
                          Reject
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
