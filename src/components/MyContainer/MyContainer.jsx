import { Container } from "@mui/material";

export const MyContainer = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", height: "100vh", gap: 2 }}>
      {children}
    </Container>
  );
};
