import { Container, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Container>
        <Typography variant="body2" align="center">
          {"Copyright © "}{" "}
          <Link color="inherit" href="https://github.com/mykola1982">
            {" "}
            Created by Mykola Zaikovskyi
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};
