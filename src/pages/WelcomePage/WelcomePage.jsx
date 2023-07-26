import { NavLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";

const WelcomePage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <PrecisionManufacturingIcon
        sx={{ fontSize: 150, color: "rgb(25, 118, 210)" }}
      />
      <Typography
        variant="h3"
        align="center"
        width="75%"
        sx={{ fontWeight: 700 }}
      >
        Ласкаво проcимо в додаток для підрахунку норм витрат метеріалу продукції
      </Typography>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        size="large"
        startIcon={<ExitToAppTwoToneIcon />}
      >
        Вхід в додаток
      </Button>
    </Box>
  );
};

export default WelcomePage;
