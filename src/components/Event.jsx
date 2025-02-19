import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Example data for Events
const events = [
  {
    title: "Quarterly Meeting",
    date: "2025-01-25",
    description: "Discuss company updates and goals.",
  },
  {
    title: "Training Session",
    date: "2025-01-27",
    description: "Learn about new asset management features.",
  },
];

export default function Event() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Events
        </Typography>
        {events.map((event, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <Typography variant="subtitle1">
              {event.title} - {event.date}
            </Typography>
            <Typography variant="body2">{event.description}</Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
