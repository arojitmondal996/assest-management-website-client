import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// Example data for Notices
const notices = [
  {
    title: "Policy Update",
    date: "2025-01-15",
    content: "New guidelines for returning assets.",
  },
  {
    title: "Maintenance Notice",
    date: "2025-01-20",
    content: "System maintenance on January 22, 2025.",
  },
];

export default function Notice() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Notices
        </Typography>
        {notices.map((notice, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <Typography variant="subtitle1">
              {notice.title} - {notice.date}
            </Typography>
            <Typography variant="body2">{notice.content}</Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
