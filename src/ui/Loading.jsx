import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
