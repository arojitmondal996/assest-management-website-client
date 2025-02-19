import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  styled,
} from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  display: "flex align",
  alignItems: "center",
  color: "black",
  fontSize: "0.8rem",
  "&.active": {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));

export default function MobileNavItems({ items }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const role = "";
  return (
    <React.Fragment>
      <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            top: "var(--template-frame-height, 0px)",
          },
        }}>
        <Box sx={{ p: 2, backgroundColor: "background.default" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          {items.map((item) => (
            <MenuItem key={item.href}>
              <StyledNavLink to={item.href}>{item.title}</StyledNavLink>
            </MenuItem>
          ))}
          <Divider sx={{ my: 3 }} />

          {!role && (
            <>
              {" "}
              <MenuItem>
                <Button color="primary" variant="contained" fullWidth>
                  Join as Employee
                </Button>
              </MenuItem>
              <MenuItem>
                <Button color="primary" variant="contained" fullWidth>
                  Join as HR Manager
                </Button>
              </MenuItem>
              <MenuItem>
                <Button color="primary" variant="outlined" fullWidth>
                  Sign in
                </Button>
              </MenuItem>
            </>
          )}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
