import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "@tanstack/react-form";
import Logo from "../components/Logo";
import SignInWithGoogle from "../components/SignInWithGoogle";
import useLogin from "../features/authentication/useLogin";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
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

export default function Login() {
  const { login, isPending } = useLogin();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => login(value),
  });

  return (
    <>
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Logo />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
            Sign in
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
              <form.Field name="email">
                {(field) => (
                  <FormControl>
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
                  </FormControl>
                )}
              </form.Field>

              <form.Field name="password">
                {(field) => (
                  <FormControl>
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
                  </FormControl>
                )}
              </form.Field>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isPending}>
                Sign in
              </Button>
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
