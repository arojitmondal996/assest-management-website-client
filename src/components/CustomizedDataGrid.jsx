import AssignmentReturnSharpIcon from "@mui/icons-material/AssignmentReturnSharp";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import PrintSharpIcon from "@mui/icons-material/PrintSharp";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useState } from "react";
import { useSearchParams } from "react-router";

// Column definition
const columns = [
  { id: "name", label: "Asset Name", minWidth: 200 },
  { id: "requestDate", label: "Request Date", minWidth: 50 },
  { id: "type", label: "Asset Type", minWidth: 50, align: "right" },
  { id: "approvalDate", label: "Approval Date", minWidth: 50, align: "right" },
  { id: "status", label: "Request Status", minWidth: 50, align: "right" },
  { id: "action", label: "Action", minWidth: 50, align: "right" },
];

// Initial assets data
const initialAssets = [
  {
    id: 1,
    name: "Laptop",
    type: "Returnable",
    requestDate: "2023-01-01",
    approvalDate: "",
    status: "Pending",
  },
  {
    id: 2,
    name: "Monitor",
    type: "Non-Returnable",
    requestDate: "2023-01-02",
    approvalDate: "2023-01-05",
    status: "Approved",
  },
  {
    id: 3,
    name: "Keyboard",
    type: "Returnable",
    requestDate: "2023-01-03",
    approvalDate: "",
    status: "Pending",
  },
  {
    id: 4,
    name: "Mouse",
    type: "Non-Returnable",
    requestDate: "2023-01-04",
    approvalDate: "2023-01-06",
    status: "Approved",
  },
  {
    id: 5,
    name: "Chair",
    type: "Returnable",
    requestDate: "2023-01-05",
    approvalDate: "",
    status: "Pending",
  },
  {
    id: 6,
    name: "Desk",
    type: "Non-Returnable",
    requestDate: "2023-01-06",
    approvalDate: "2023-01-07",
    status: "Approved",
  },
  {
    id: 7,
    name: "Headphones",
    type: "Returnable",
    requestDate: "2023-01-07",
    approvalDate: "",
    status: "Pending",
  },
  {
    id: 8,
    name: "Webcam",
    type: "Non-Returnable",
    requestDate: "2023-01-08",
    approvalDate: "2023-01-09",
    status: "Approved",
  },
  {
    id: 9,
    name: "Printer",
    type: "Returnable",
    requestDate: "2023-01-09",
    approvalDate: "",
    status: "Pending",
  },
  {
    id: 10,
    name: "Scanner",
    type: "Non-Returnable",
    requestDate: "2023-01-10",
    approvalDate: "2023-01-11",
    status: "Approved",
  },
];

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  header: { fontSize: 18, marginBottom: 10 },
  footer: { fontSize: 12, marginTop: 20, textAlign: "center" },
});

const AssetDocument = ({ asset }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Company Information</Text>
        <Text>Asset Name: {asset.name}</Text>
        <Text>Asset Type: {asset.type}</Text>
        <Text>Request Date: {asset.requestDate}</Text>
        <Text>Approval Date: {asset.approvalDate}</Text>
        <Text>Request Status: {asset.status}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Printing Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

export default function CustomizedDataGrid() {
  const [assets, setAssets] = useState(initialAssets);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || 0, 10);
  const rowsPerPage = parseInt(searchParams.get("rowsPerPage") || 5, 10);

  // Handling page change
  const handleChangePage = (event, newPage) => {
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  // Handling rows per page change
  const handleChangeRowsPerPage = (event) => {
    searchParams.set("rowsPerPage", parseInt(event.target.value, 10));
    setSearchParams(searchParams);
    searchParams.delete("page");
  };

  // Handling cancel request
  const handleCancel = (id) => {
    setAssets(
      assets.map((asset) =>
        asset.id === id ? { ...asset, status: "Cancelled" } : asset
      )
    );
  };

  // Handling return asset
  const handleReturn = (id) => {
    setAssets(
      assets.map((asset) =>
        asset.id === id ? { ...asset, status: "Returned" } : asset
      )
    );
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
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
            {assets
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((asset) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={asset.id}>
                    {columns.map((column) => {
                      const value = asset[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "action" ? (
                            <>
                              {asset.status === "Pending" && (
                                <Button
                                  variant="contained"
                                  color="error"
                                  onClick={() => handleCancel(asset.id)}
                                  size="small">
                                  <CancelSharpIcon />
                                </Button>
                              )}
                              {asset.status === "Approved" && (
                                <>
                                  <PDFDownloadLink
                                    document={<AssetDocument asset={asset} />}
                                    fileName={`${asset.name}-details.pdf`}>
                                    {({ loading }) => (
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        size="small">
                                        {loading ? (
                                          "Loading..."
                                        ) : (
                                          <PrintSharpIcon />
                                        )}
                                      </Button>
                                    )}
                                  </PDFDownloadLink>
                                  {asset.type === "Returnable" && (
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                      onClick={() => handleReturn(asset.id)}
                                      disabled={asset.status === "Returned"}
                                      sx={{ ml: 2 }}
                                      size="small">
                                      <AssignmentReturnSharpIcon />
                                    </Button>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={assets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
