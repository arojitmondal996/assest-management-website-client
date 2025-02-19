import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}>
      <Typography variant="h4" gutterBottom>
        Unauthorized
      </Typography>
      <Typography variant="body1" gutterBottom>
        You do not have permission to view this page.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default Unauthorized;
