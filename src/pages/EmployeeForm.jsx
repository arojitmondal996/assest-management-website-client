import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { formOptions, useForm } from "@tanstack/react-form";
import Logo from "../components/Logo";
import SignInWithGoogle from "../components/SignInWithGoogle";
import useEmployeeRegister from "../features/authentication/useEmployeeRegister";
import {
  birthdateValidator,
  displayNameValidator,
  emailValidator,
  passwordValidator,
} from "../utils/validator";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "650px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const formOpts = formOptions({
  defaultValues: {
    displayName: "",
    email: "",
    password: "",
    birthDate: "",
  },
});

export default function EmployeeForm() {
  const { mutate: employeeRegister, isPending } = useEmployeeRegister();
  const form = useForm({
    ...formOpts,
    onSubmit: ({ value }) => employeeRegister(value),
  });

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Logo />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
            Employee
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}>
            <Box
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}>
              <Grid container spacing={3}>
                <form.Field
                  name="displayName"
                  validators={displayNameValidator}>
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isPending}>
                  Sign Up
                </Button>
              </Grid>
            </Box>
          </form>
          <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <SignInWithGoogle />
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
