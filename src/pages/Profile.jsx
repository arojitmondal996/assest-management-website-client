import {
  Box,
  Button,
  FormLabel,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm } from "@tanstack/react-form";
import useAuth from "../features/authentication/useAuth";
import useUpdateUser from "../features/user/useUpdateUser";
import { displayNameValidator, emailValidator } from "../utils/validator";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function Profile() {
  const { updateUser, isPending } = useUpdateUser();
  const { user } = useAuth();
  const form = useForm({
    defaultValues: {
      displayName: user.displayName,
      email: user.email,
      // Add other initial values as needed
    },
    onSubmit: ({ value }) => updateUser({ ...value, id: user._id }),
  });

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ my: 2 }} gutterBottom>
        Profile
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}>
        <Paper sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <form.Field name="displayName" validators={displayNameValidator}>
              {(field) => (
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel htmlFor={field.name}>Full Name</FormLabel>
                  <TextField
                    id={field.name}
                    type="text"
                    name={field.name}
                    placeholder="John Doe"
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
            <form.Field name="email" validators={emailValidator}>
              {(field) => (
                <FormGrid size={{ xs: 12, md: 6 }}>
                  <FormLabel htmlFor={field.name}>Email</FormLabel>
                  <TextField
                    id={field.name}
                    type="Email"
                    name={field.name}
                    placeholder="example@example.com"
                    autoComplete={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    error={field.state.meta.errors.length > 0}
                    helperText={field.state.meta.errors.join(", ")}
                    fullWidth
                    variant="outlined"
                    size="small"
                    inputProps={{
                      readOnly: true,
                    }}
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
                Update
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
}
