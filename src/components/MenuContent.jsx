import { styled } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router";
import useAuth from "../features/authentication/useAuth";
import { navItems } from "../utils/static";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&.active": {
    color: theme.palette.primary.main,
  },
}));

export default function MenuContent() {
  const { user } = useAuth();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {user &&
          navItems[user.role].map((item, index) => (
            <StyledNavLink
              to={item.href}
              key={index}
              style={{ textDecoration: "none" }}>
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton selected={index === 0}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </StyledNavLink>
          ))}
      </List>
    </Stack>
  );
}
