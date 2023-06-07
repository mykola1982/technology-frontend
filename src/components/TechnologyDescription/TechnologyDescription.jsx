import { Box, Typography } from "@mui/material";

export const TechnologyDescription = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        mt: 10,
        mb: 2,
        p: 2,
        pt: 11,
        backgroundColor: "#f5f5f5",
        boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
        flexGrow: 1,
      }}
    >
      <Typography variant="h4" align={"center"} sx={{ fontWeight: 700 }}>
        Технологічний процес
      </Typography>
    </Box>
  );
};
