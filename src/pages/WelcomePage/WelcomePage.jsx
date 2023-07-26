import { NavLink } from "react-router-dom";
import { Box, Button, Typography, SvgIcon } from "@mui/material";

import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";

import { ReactComponent as PressIcon } from "../../icons/press-svgrepo-com.svg";

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
      <SvgIcon sx={{ fontSize: 250, color: "#1976d2" }}>
        <PressIcon />
      </SvgIcon>

      <Typography
        variant="h3"
        align="center"
        width="75%"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "28px", md: "44px" },
        }}
      >
        Ласкаво проcимо в додаток для підрахунку норми витрати метеріалу
        продукції на штамповочному виробництві
      </Typography>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        size="large"
        endIcon={<ExitToAppTwoToneIcon />}
      >
        Вхід в додаток
      </Button>
    </Box>
  );
};

export default WelcomePage;
