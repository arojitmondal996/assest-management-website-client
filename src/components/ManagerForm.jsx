import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { formOptions, useForm } from "@tanstack/react-form";
import { useSearchParams } from "react-router";
import useHrRegister from "../features/authentication/useHrRegister";
import { tiers } from "../utils/static";
import {
  birthdateValidator,
  companyLogoValidator,
  companyNameValidator,
  displayNameValidator,
  emailValidator,
  passwordValidator,
} from "../utils/validator";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const formOpts = formOptions({
  displayName: "",
  email: "",
  password: "",
  companyName: "",
  companyLogo: "",
  birthDate: "",
  package: "Starter",
});

export default function ManagerForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { mutate: hrRegister, isPending } = useHrRegister();

  const form = useForm({
    ...formOpts,
    onSubmit: ({ value }) => hrRegister(value),
  });

  const handleChange = (e) => {
    searchParams.set("package", e.target.value);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}>
      <Grid container spacing={3}>
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
              />
            </FormGrid>
          )}
        </form.Field>

        <form.Field name="password" validators={passwordValidator}>
          {(field) => (
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor={field.name}>Password</FormLabel>
              <TextField
                id={field.name}
                type="text"
                name={field.name}
                placeholder="********"
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

        <form.Field name="companyName" validators={companyNameValidator}>
          {(field) => (
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor={field.name}>Company Name</FormLabel>
              <TextField
                id={field.name}
                type="text"
                name={field.name}
                placeholder="Company Name"
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

        <form.Field name="companyLogo" validators={companyLogoValidator}>
          {(field) => (
            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor={field.name}>Company Logo</FormLabel>
              <TextField
                id={field.name}
                type="text"
                name={field.name}
                placeholder="https://xyz.com/logo.png"
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

        <form.Field name="birthDate" validators={birthdateValidator}>
          {(field) => (
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor={field.name}>Date of birth</FormLabel>
              <TextField
                id={field.name}
                type="date"
                name={field.name}
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

        <form.Field name="package" onChange={(e) => handleChange(e)}>
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
                label="Select a package"
                onChange={(e) => {
                  field.handleChange(e.target.value);
                  handleChange(e);
                }}
                size="small">
                {tiers.map((tier) => (
                  <MenuItem key={tier.title} value={tier.title}>
                    {tier.title}
                  </MenuItem>
                ))}
              </Select>
            </FormGrid>
          )}
        </form.Field>

        {/* <FormGrid size={{ xs: 6 }}>
        <FormLabel id="package" htmlFor="package" required>
          Select a package
        </FormLabel>
        
      </FormGrid> */}
      </Grid>
      <Box
        sx={[
          {
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: "end",
            flexGrow: 1,
            gap: 1,
            pb: { xs: 12, sm: 0 },
            mt: { xs: 2, sm: 2 },
            mb: "60px",
            justifyContent: "flex-end",
          },
        ]}>
        <Button
          type="submit"
          variant="contained"
          endIcon={<ChevronRightIcon />}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
          disabled={isPending}>
          Next
        </Button>
      </Box>
    </form>
  );
}
