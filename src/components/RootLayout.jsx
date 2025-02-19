import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { Outlet, ScrollRestoration } from "react-router";
import SideMenu from "../components/SideMenu";
import useAuth from "../features/authentication/useAuth";
import AppNavbar from "./AppNavbar";
import Loading from "./Loading";

export default function RootLayout() {
  const { loading } = useAuth();

  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <AppNavbar />

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: "auto",
        })}>
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}>
          {loading ? <Loading /> : <Outlet />}

          <ScrollRestoration />
        </Stack>
      </Box>
    </Box>
  );
}
