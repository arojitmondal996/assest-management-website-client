import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const LogoTitle = styled("span")(({ theme }) => ({
  marginLeft: "10px",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: "1rem",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledImg = styled("img")(() => ({
  width: "20px",
  height: "20px",
}));

export default function Logo() {
  return (
    <Box display="flex" alignItems="center">
      <StyledImg src="/logo.svg" alt="Logo" />
      <LogoTitle>Manager</LogoTitle>
    </Box>
  );
}
