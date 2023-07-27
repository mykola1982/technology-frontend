import { Box, Typography, SvgIcon } from "@mui/material";

import { LoginForm } from "../../components/LoginForm";
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
        gap: "24px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <SvgIcon sx={{ fontSize: 200, color: "#1976d2" }}>
        <PressIcon />
      </SvgIcon>
      <Typography
        variant="h3"
        align="center"
        width="50%"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "28px", md: "44px" },
        }}
      >
        Ласкаво проcимо в додаток TECHNOLOGIST
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default WelcomePage;
