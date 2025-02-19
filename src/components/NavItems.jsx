import { Button, styled } from "@mui/material";
import { NavLink } from "react-router";

const NavContainer = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  listStyle: "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

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

export default function NavItems({ items }) {
  return (
    <NavContainer>
      {items.map((item) => (
        <Button key={item.href} variant="text" color="info" size="small">
          <StyledNavLink to={item.href}>{item.title}</StyledNavLink>
        </Button>
      ))}
    </NavContainer>
  );
}
