import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const employeePerformance = [
  { id: 1, name: "John Doe", performance: "Excellent" },
  { id: 2, name: "Jane Smith", performance: "Good" },
  { id: 3, name: "Alice Johnson", performance: "Average" },
  // Add more performance records as needed
];

export default function EmployeePerformance() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Employee Performance
      </Typography>
      <List>
        {employeePerformance.map((employee) => (
          <ListItem key={employee.id}>
            <ListItemText
              primary={employee.name}
              secondary={`Performance: ${employee.performance}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
