import { Button } from "@mui/material";
import { useGoogleLogin } from "../features/authentication/useGoogleLogin";
import { GoogleIcon } from "./CustomIcons";

export default function SignInWithGoogle() {
  const { mutate: googleLogin, isPending } = useGoogleLogin();
  return (
    <Button
      fullWidth
      variant="outlined"
      onClick={googleLogin}
      startIcon={<GoogleIcon />}
      disabled={isPending}>
      Sign in with Google
    </Button>
  );
}
