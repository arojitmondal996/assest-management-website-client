import { Button, Container, styled } from "@mui/material";
import { navItems } from "../utils/static";
import Logo from "./Logo";
import MobileNavItems from "./MobileNavItems";
import NavItems from "./NavItems";
import Profile from "./Profile";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router";
import useAuth from "../features/authentication/useAuth";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "0 12px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&:visited": {
    color: theme.palette.primary.main,
  },
}));

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}>
      <Container maxWidth="lg" sx={{ mx: "auto" }}>
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}>
            <Logo />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavItems items={navItems[user?.role] || navItems.loggedOut} />
            </Box>
          </Box>

          {!isAuthenticated && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}>
              <Button color="primary" variant="text" size="small">
                <StyledLink to="join-as-employee">Join as Employee</StyledLink>
              </Button>
              <Button color="primary" variant="text" size="small">
                <StyledLink to="join-as-hr-manager">
                  Join as HR Manager
                </StyledLink>
              </Button>
              <Button color="primary" variant="contained" size="small">
                <StyledLink
                  to="login"
                  style={{
                    color: "white",
                  }}>
                  Login
                </StyledLink>
              </Button>
            </Box>
          )}
          {isAuthenticated && <Profile />}

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <MobileNavItems
              items={navItems[user?.role] || navItems.loggedOut}
            />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
