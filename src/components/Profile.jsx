import { Avatar, Divider, Menu, MenuItem, styled } from "@mui/material";
import React from "react";
import useLogout from "../features/authentication/useLogout";

const StyledButton = styled("button")(({ theme }) => ({
  background: "none",
  color: theme.palette.primary.main,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
  "&:focus": {
    outline: "none",
  },
}));

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout } = useLogout();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    logout();
  };
  return (
    <div>
      <StyledButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <Avatar
          alt="Arojit Mondal"
          src="/profile.jpg"
          sx={{ width: 25, height: 25 }}
        />
      </StyledButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleClose}>Arojit Mondal</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
