import {
  Avatar,
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useAddEmployee from "../features/addEmployee/useAddEmployee";
import useGetAvailableEmployees from "../features/addEmployee/useGetAvailableEmployees";

const initialUnaffiliatedUsers = [
  { id: 1, name: "John Doe", image: "/path/to/image1.jpg" },
  { id: 2, name: "Jane Smith", image: "/path/to/image2.jpg" },
  { id: 3, name: "Alice Johnson", image: "/path/to/image3.jpg" },
  // Add more unaffiliated users as needed
];

export default function UnaffiliatedUsers() {
  const { availableEmployees } = useGetAvailableEmployees();
  const { addEmployee, isPending } = useAddEmployee();

  const [unaffiliatedUsers, setUnaffiliatedUsers] = useState(
    initialUnaffiliatedUsers
  );
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleToggle = (id) => {
    const currentIndex = selectedUsers.indexOf(id);
    const newSelectedUsers = [...selectedUsers];

    if (currentIndex === -1) {
      newSelectedUsers.push(id);
    } else {
      newSelectedUsers.splice(currentIndex, 1);
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handleAddSelectedToTeam = () => {
    // Handle add selected members to team logic here

    setUnaffiliatedUsers(
      unaffiliatedUsers.filter((user) => !selectedUsers.includes(user._id))
    );
    addEmployee(selectedUsers);
    setSelectedUsers([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rows = availableEmployees
    ? availableEmployees.map((user) => ({
        ...user,
        isSelected: selectedUsers.indexOf(user._id) !== -1,
      }))
    : [];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Unaffiliated Users
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddSelectedToTeam}
        sx={{ mb: 2 }}
        disabled={selectedUsers.length === 0 || isPending}>
        Add Selected Members to the Team
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Checkbox</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user._id}>
                  <TableCell>
                    <Checkbox
                      edge="start"
                      onChange={() => handleToggle(user._id)}
                      checked={user.isSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Avatar src={user?.PhotoUrl} alt={user.displayName} />
                  </TableCell>
                  <TableCell>{user.displayName}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => addEmployee([user._id])}
                      disabled={isPending}>
                      Add to Team
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
