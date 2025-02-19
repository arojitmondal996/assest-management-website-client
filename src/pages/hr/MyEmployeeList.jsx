import {
  Avatar,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import useMyEmployees from "../../features/myEmployees/useMyEmployees";
import useRemoveEmployee from "../../features/removeEmploye/useRemoveEmployee";

export default function MyEmployeeList() {
  const { employees } = useMyEmployees();
  const { removeEmployee, isPending } = useRemoveEmployee();

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        My Employee List
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees &&
              employees.length > 0 &&
              employees.map((member) => (
                <TableRow key={member._id}>
                  <TableCell>
                    <Avatar src={member?.photoURL} alt={member.displayName} />
                  </TableCell>
                  <TableCell>{member.displayName}</TableCell>
                  <TableCell>
                    {member.role === "admin" ? "Admin" : "Employee"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => removeEmployee(member._id)}
                      disabled={isPending}>
                      Remove From Team
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
