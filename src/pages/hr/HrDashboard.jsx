import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import EmployeePerformance from "../../components/EmployeePerformance";
import LimitedStockItems from "../../components/LimitedStockItems";
import PendingRequests from "../../components/PendingRequests";
import RecentActivities from "../../components/RecentActivities";
import TopRequestedItems from "../../components/TopRequestedItems";

const data = [
  { name: "Returnable", value: 400 },
  { name: "Non-Returnable", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F"];

export default function HrDashboard() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography variant="h4" gutterBottom>
        HR Manager Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PendingRequests />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopRequestedItems />
        </Grid>
        <Grid item xs={12} md={6}>
          <LimitedStockItems />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">
              Returnable vs Non-Returnable Items
            </Typography>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <RecentActivities />
        </Grid>
        <Grid item xs={12} md={6}>
          <EmployeePerformance />
        </Grid>
      </Grid>
    </Box>
  );
}
