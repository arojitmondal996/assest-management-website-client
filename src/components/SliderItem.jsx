import { Box } from "@mui/material";
export default function SliderItem({ image, children }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "80vh",
        backgroundImage: `url(/${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          zIndex: 1,
        }}
      />
      {children}
    </Box>
  );
}
