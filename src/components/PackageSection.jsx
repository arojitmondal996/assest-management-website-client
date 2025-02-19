import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import useAuth from "../features/authentication/useAuth";
import useMyEmployees from "../features/myEmployees/useMyEmployees";

const PackageSection = () => {
  const { user } = useAuth();
  const { employees } = useMyEmployees();
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Package Information
      </Typography>
      <Typography variant="body1">
        Employee Count: {employees && employees.length}
      </Typography>
      <Typography variant="body1">Package Limit: {user?.employees}</Typography>
      <Link to="/dashboard/hr-manager/increase-limit">
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Increase Limit
        </Button>
      </Link>
    </Paper>
  );
};

export default PackageSection;
