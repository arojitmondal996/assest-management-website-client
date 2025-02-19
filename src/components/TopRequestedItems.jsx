import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const topRequestedItems = [
  { id: 1, name: "Laptop", requestCount: 10 },
  { id: 2, name: "Monitor", requestCount: 8 },
  { id: 3, name: "Keyboard", requestCount: 6 },
  { id: 4, name: "Mouse", requestCount: 5 },
  // Add more items as needed
];

export default function TopRequestedItems() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Top Most Requested Items
      </Typography>
      <List>
        {topRequestedItems.slice(0, 4).map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Request Count: ${item.requestCount}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
