import { Container } from "@mui/material";

export const MyContainer = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        gap: 2,
        height: "100vh",
      }}
    >
      {children}
    </Container>
  );
};
