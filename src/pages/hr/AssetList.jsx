import {
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
import Grid from "@mui/material/Grid2";
import DashboardHeader from "../../components/DashboardHeader";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import useAssets from "../../features/assetList/useAssets";
import useDeleteAsset from "../../features/assetList/useDeleteAsset";
import { formatDate } from "../../utils/helper";

export default function AssetList() {
  const { assets, error } = useAssets();
  const { deleteAsset, isPending } = useDeleteAsset();

  if (error) {
    return <Typography>Error loading assets</Typography>;
  }

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <DashboardHeader>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Search query="assetsQ" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Filter filterBy="status" options={["Available", "Out-of-Stock"]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Filter
              filterBy="type"
              options={["Returnable", "Non-Returnable"]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Filter title="Sort" filterBy="quantity" options={["ASC", "DSC"]} />
          </Grid>
        </Grid>
      </DashboardHeader>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        Asset List
      </Typography>

      {assets && assets.length > 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell>Product Type</TableCell>
                      <TableCell>Product Quantity</TableCell>
                      <TableCell>Date Added</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {assets.map((asset) => (
                      <TableRow key={asset._id}>
                        <TableCell>{asset.name}</TableCell>
                        <TableCell>{asset.type}</TableCell>
                        <TableCell>{asset.quantity}</TableCell>
                        <TableCell>{formatDate(asset.addedAt)}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {}}
                            size="small">
                            Update
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => deleteAsset(asset._id)}
                            sx={{ ml: 2 }}
                            size="small"
                            disabled={isPending}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Typography>No assets found</Typography>
      )}
    </Box>
  );
}
