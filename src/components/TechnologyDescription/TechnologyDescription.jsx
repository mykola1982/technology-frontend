import { Box, Typography } from "@mui/material";

import DeveloperFoto from "../../images/developer.png";

export const TechnologyDescription = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        mt: 10,
        mb: 6,
        p: 2,
        pt: 11,
        backgroundColor: "#f5f5f5",
        boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
        flexGrow: 1,
        overflowX: "auto",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <Typography variant="h4" align={"center"} sx={{ fontWeight: 700, mb: 2 }}>
        Технологічний процес
      </Typography>
      <Typography
        variant="body1"
        align={"center"}
        sx={{ color: "red", fontWeight: 500, mb: 2 }}
      >
        Даний розділ знаходиться в процесі розробки...
      </Typography>
      <Box
        sx={{
          width: "350px",
          height: "350px",

          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <img src={DeveloperFoto} alt="developer" />
      </Box>
    </Box>
  );
};
