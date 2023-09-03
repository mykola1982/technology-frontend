import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box } from "@mui/material";

import { selectMaterials } from "redux/materials/materialsSelector";

import { getMaterials } from "../../data/fakeAPI";
import { Loader } from "components/Loader";
import { MyContainer } from "components/MyContainer";
import { MaterialsList } from "components/MaterialsList";
import { AddMaterialForm } from "../../components/AddMaterialForm";

const Materials = () => {
  const materials = useSelector(selectMaterials);

  console.log(materials);

  return (
    <>
      <MyContainer>
        <Box
          sx={{
            width: "380px",
            justifyContent: "center",
            borderRadius: 4,
            display: "flex",
            mt: 10,
            mb: 6,
            p: 1,
            pt: 3,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <AddMaterialForm />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            borderRadius: 4,
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            mt: 10,
            mb: 6,
            p: 1,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <MaterialsList />
        </Box>
      </MyContainer>
    </>
  );
};

export default Materials;
