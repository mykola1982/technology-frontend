import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box } from "@mui/material";

import {
  selectMaterials,
  selectIsLoading,
  selectError,
} from "redux/materials/materialsSelector";

import { getMaterials } from "../../data/fakeAPI";
import { Loader } from "components/Loader";
import { MyContainer } from "components/MyContainer";
import { MaterialsList } from "components/MaterialsList";
import { useEffect } from "react";
import { fetchMaterials } from "../../redux/materials/materialsOperation";

// const columns = [
//   { id: "index", label: "№ п.п", minWidth: 50, align: "center" },
//   {
//     id: "sizeSheet",
//     label: "Розмір та тип листа",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "thicknessSheet",
//     label: "Товщина листа, мм",
//     minWidth: 100,
//     align: "center",
//     // format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "weightSheet",
//     label: "Вага листа, мм.",
//     minWidth: 100,
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "event",
//     label: "Видалити",
//     minWidth: 100,
//     align: "center",
//   },
// ];

const Materials = () => {
  const materials = useSelector(selectMaterials);

  // const isLoading = useSelector(selectIsLoading);
  console.log(materials);

  // useEffect(() => dispath(fetchMaterials()), [dispath]);
  return (
    <>
      {/* {isloading && <Loader />}
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
        />

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
          <MaterialsList
            materials={materials}
            // openModal={openModalDelete}////.
          />
        </Box>
      </MyContainer> */}
    </>
  );
};

export default Materials;
