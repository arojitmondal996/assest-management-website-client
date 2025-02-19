import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#7367F0",
    },
    secondary: {
      main: "#ff4c51",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
