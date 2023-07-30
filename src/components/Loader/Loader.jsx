import { Box, CircularProgress, SvgIcon } from "@mui/material";

import { ReactComponent as PressIcon } from "icons/press-svgrepo-com.svg";

export const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#E8F0FE",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress size={80} />
      </Box>

      <SvgIcon
        sx={{
          fontSize: 40,
          color: "#1976d2",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <PressIcon />
      </SvgIcon>
    </Box>
  );
};
