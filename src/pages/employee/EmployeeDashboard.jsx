import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Calender from "../../components/Calender";
import CustomizedDataGrid from "../../components/CustomizedDataGrid";
import DashboardHeader from "../../components/DashboardHeader";
import Event from "../../components/Event";
import Filter from "../../components/Filter";
import MyMonthlyRequests from "../../components/MyMonthlyRequests";
import Notice from "../../components/Notice";
import Search from "../../components/Search";

export default function EmployeeDashboard() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <DashboardHeader>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Search query="assetsQ" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Filter filterBy="status" options={["Pending", "Approved"]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Filter
              filterBy="type"
              options={["Returnable", "Non-Returnable"]}
            />
          </Grid>
        </Grid>
      </DashboardHeader>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        My pending requests
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Calender />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        My monthly requests
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <MyMonthlyRequests />
        </Grid>
        <Grid container spacing={2} size={{ xs: 12, lg: 4 }}>
          <Event />
          <Notice />
        </Grid>
      </Grid>
      {/* <Copyright sx={{ my: 4 }} /> */}
    </Box>
  );
}
