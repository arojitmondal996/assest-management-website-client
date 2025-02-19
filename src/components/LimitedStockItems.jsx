import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const limitedStockItems = [
  { id: 1, name: "Laptop", quantity: 5 },
  { id: 2, name: "Monitor", quantity: 3 },
  { id: 3, name: "Keyboard", quantity: 8 },
  { id: 4, name: "Mouse", quantity: 2 },
  // Add more items as needed
];

export default function LimitedStockItems() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Limited Stock Items
      </Typography>
      <List>
        {limitedStockItems
          .filter((item) => item.quantity < 10)
          .map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={`Quantity: ${item.quantity}`}
              />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}
