import { Box } from "@mui/material";

import { Loader } from "components/Loader";
import { MyContainer } from "components/MyContainer";
import { MaterialsList } from "components/MaterialsList";

import { MaterialsDashboard } from "components/MaterialsDashboard";

const Materials = () => {
  return (
    <MyContainer>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          mt: 10,
          mb: 6,
          p: 1,
          borderRadius: 4,
          backgroundColor: "#f5f5f5",
          boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
        }}
      >
        <MaterialsDashboard />
        <MaterialsList />
      </Box>
    </MyContainer>
  );
};

export default Materials;
