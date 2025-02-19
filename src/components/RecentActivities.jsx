import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const recentActivities = [
  { id: 1, activity: "Approved asset request for Laptop", date: "2023-01-10" },
  { id: 2, activity: "Added new employee John Doe", date: "2023-01-09" },
  { id: 3, activity: "Updated asset quantity for Monitor", date: "2023-01-08" },
  // Add more activities as needed
];

export default function RecentActivities() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>
      <List>
        {recentActivities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText
              primary={activity.activity}
              secondary={`Date: ${activity.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
