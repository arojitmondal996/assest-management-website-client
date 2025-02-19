import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";

const teamMembers = [
  { id: 1, name: "John Doe", type: "admin", image: "/path/to/image1.jpg" },
  { id: 2, name: "Jane Smith", type: "employee", image: "/path/to/image2.jpg" },
  // Add more team members as needed
];

export default function MyTeam() {
  const handleRemove = (id) => {
    // Handle remove logic here
    console.log("Remove member with id:", id);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        My Team
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map((member) => (
          <Grid item xs={12} md={6} key={member.id}>
            <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
              <Avatar src={member.image} alt={member.name} sx={{ mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1">
                  <strong>Name:</strong> {member.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Type:</strong> {member.type}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemove(member.id)}>
                Remove From Team
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
