import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const pendingRequests = [
  { id: 1, name: "Laptop", requestDate: "2023-01-01", status: "Pending" },
  { id: 2, name: "Monitor", requestDate: "2023-01-02", status: "Pending" },
  { id: 3, name: "Keyboard", requestDate: "2023-01-03", status: "Pending" },
  { id: 4, name: "Mouse", requestDate: "2023-01-04", status: "Pending" },
  { id: 5, name: "Chair", requestDate: "2023-01-05", status: "Pending" },
  // Add more requests as needed
];

export default function PendingRequests() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Pending Requests
      </Typography>
      <List>
        {pendingRequests.slice(0, 5).map((request) => (
          <ListItem key={request.id}>
            <ListItemText
              primary={request.name}
              secondary={`Request Date: ${request.requestDate}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
