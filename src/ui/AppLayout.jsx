import { alpha, Box, Stack } from "@mui/material";
import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import SideMenu from "../components/SideMenu";

export default function AppLayout() {
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
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
}
