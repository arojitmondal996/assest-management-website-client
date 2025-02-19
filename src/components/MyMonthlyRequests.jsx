import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React from "react";

// Define table columns
const columns = [
  { id: "name", label: "Asset Name", minWidth: 200 },
  { id: "date", label: "Request Date", minWidth: 50 },
  { id: "status", label: "Status", minWidth: 50 },
  { id: "action", label: "Action", minWidth: 50, align: "right" },
];

// Example data for requests
const rows = [
  { name: "Laptop", date: "2025-01-15", status: "Pending", action: "Cancel" },
  {
    name: "Keyboard",
    date: "2025-01-10",
    status: "Approved",
    action: "Return",
  },
  { name: "Mouse", date: "2025-01-18", status: "Pending", action: "Cancel" },
  { name: "Desk", date: "2025-01-03", status: "Approved", action: "Return" },
  {
    name: "Cell Phone",
    date: "2025-01-20",
    status: "Pending",
    action: "Cancel",
  },
  { name: "Pen", date: "2025-01-02", status: "Approved", action: "Return" },
  { name: "Diary", date: "2025-01-19", status: "Pending", action: "Cancel" },
];

export default function MyMonthlyRequests() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Get the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // January is 0
  const currentYear = currentDate.getFullYear();

  // Filter and sort rows
  const monthlyRequests = rows
    .filter((row) => {
      const requestDate = new Date(row.date);
      return (
        requestDate.getMonth() === currentMonth &&
        requestDate.getFullYear() === currentYear
      );
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent first

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {monthlyRequests
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={monthlyRequests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
