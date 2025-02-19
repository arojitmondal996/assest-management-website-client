import { Box, Typography } from "@mui/material";
import PackageSection from "../../components/PackageSection";
import UnaffiliatedUsers from "../../components/UnaffiliatedUsers";

export default function AddEmployee() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        Add an Employee
      </Typography>

      <PackageSection />
      <UnaffiliatedUsers />
    </Box>
  );
}
