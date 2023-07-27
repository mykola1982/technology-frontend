import { Translate } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

import { Box } from "@mui/material";

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
    </Box>
  );
};
