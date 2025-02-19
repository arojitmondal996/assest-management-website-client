import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { formOptions, useForm } from "@tanstack/react-form";
import useAddAsset from "../../features/assetList/useAddAsset";
import {
  assetNameValidator,
  assetQuantityValidator,
  assetTypeValidator,
} from "../../utils/validator";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const formOpts = formOptions({
  defaultValues: {
    name: "",
    type: "",
    quantity: "",
  },
});

export default function AddAsset() {
  const { addAsset, isPending } = useAddAsset();
  const form = useForm({
    ...formOpts,
    onSubmit: ({ value }) => addAsset(value),
  });

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        Add an Asset
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}>
        <Paper sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <form.Field name="name" validators={assetNameValidator}>
              {(field) => (
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel htmlFor={field.name}>Full Name</FormLabel>
                  <TextField
                    id={field.name}
                    type="text"
                    name={field.name}
                    placeholder="Laptop"
                    autoComplete={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    error={field.state.meta.errors.length > 0}
                    helperText={field.state.meta.errors.join(", ")}
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </FormGrid>
              )}
            </form.Field>
            <form.Field name="type" validators={assetTypeValidator}>
              {(field) => (
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel id={`${field.package}-label`}>
                    Select a package
                  </FormLabel>
                  <Select
                    labelId={`${field.package}-label`}
                    id={field.package}
                    name={field.package}
                    value={field.state.value}
                    label="Select asset type"
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    error={field.state.meta.errors.length > 0}
                    helperText={field.state.meta.errors.join(", ")}
                    fullWidth
                    size="small">
                    <MenuItem value="Returnable">Returnable</MenuItem>
                    <MenuItem value="Non-Returnable">Non-Returnable</MenuItem>
                  </Select>
                </FormGrid>
              )}
            </form.Field>

            <form.Field name="quantity" validators={assetQuantityValidator}>
              {(field) => (
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel htmlFor={field.name}>Full Name</FormLabel>
                  <TextField
                    id={field.name}
                    type="text"
                    name={field.name}
                    placeholder="10"
                    autoComplete={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    error={field.state.meta.errors.length > 0}
                    helperText={field.state.meta.errors.join(", ")}
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </FormGrid>
              )}
            </form.Field>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isPending}>
                Add Asset
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
}
