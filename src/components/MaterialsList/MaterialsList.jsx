import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteMaterial } from "redux/materials/materialsOperation";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import { selectMaterials } from "redux/materials/materialsSelector";
import { ModalSmall } from "components/ModalSmall";
import { ContentModalDelete } from "components/ContentModalDelete";

export const MaterialsList = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idMaterialToDelete, setIdMaterialToDelete] = useState(null);

  const materials = useSelector(selectMaterials);

  const dispatch = useDispatch();

  const openModalDelete = (id) => {
    setShowModalDelete(true);
    setIdMaterialToDelete(id);
  };
  const closeModalDelete = () => {
    setShowModalDelete(false);
  };
  const handleDeleteMaterial = () => {
    dispatch(deleteMaterial(idMaterialToDelete));
    setIdMaterialToDelete(null);
    closeModalDelete();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow
              sx={{ position: "sticky", top: 0, zIndex: 1, background: "#fff" }}
            >
              <TableCell align="center">№ п.п.</TableCell>
              <TableCell align="center">Марка матеріалу</TableCell>
              <TableCell align="center">Cортамент</TableCell>
              <TableCell align="center">Розміри, мм.</TableCell>
              <TableCell align="center">Вага листа, кг.</TableCell>
              <TableCell align="center">Редагувати</TableCell>
              <TableCell align="center">Видалити</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {materials?.map((material, index) => {
              return (
                <TableRow
                  key={material._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{material.brand}</TableCell>
                  <TableCell align="center">
                    {material.type === "sheet" ? "Лист" : "Круг"}
                  </TableCell>

                  {material.type === "sheet" && (
                    <TableCell align="center">
                      {material.sheetParameters.thickness}x
                      {material.sheetParameters.length}x
                      {material.sheetParameters.width}
                    </TableCell>
                  )}
                  {material.type === "rod" && (
                    <TableCell align="center">
                      {material.rodParameters.diameter}
                    </TableCell>
                  )}

                  <TableCell align="center">{material.weight}</TableCell>

                  <TableCell align="center">
                    <IconButton
                      sx={{ color: "#1976d2" }}
                      aria-label="delete"
                      size="medium"
                    >
                      <EditIcon fontSize="medium" />
                    </IconButton>
                  </TableCell>

                  <TableCell align="center">
                    <IconButton
                      sx={{ color: "#1976d2" }}
                      aria-label="delete"
                      size="medium"
                      onClick={() => openModalDelete(material._id)}
                    >
                      <DeleteForeverIcon fontSize="medium" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalSmall open={showModalDelete} onClose={closeModalDelete}>
        <ContentModalDelete
          title={"Бажаєте видалити матеріал?"}
          onDelete={handleDeleteMaterial}
          onClose={closeModalDelete}
        />
      </ModalSmall>
    </>
  );
};
