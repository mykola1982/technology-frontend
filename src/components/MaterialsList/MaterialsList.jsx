import { useSelector } from "react-redux";

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

import { selectMaterials } from "redux/materials/materialsSelector";

export const MaterialsList = () => {
  const materials = useSelector(selectMaterials);
  console.log(materials);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow
            sx={{ position: "sticky", top: 0, zIndex: 1, background: "#fff" }}
          >
            <TableCell align="center">№ п.п.</TableCell>
            <TableCell align="center">Сортамент</TableCell>
            <TableCell align="center">Вага листа</TableCell>
            <TableCell align="center">Видалити</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {materials?.map((material, index) => {
            // const { _id, type, brand, sheetParameters, rodParameters, weight } =
            //   material;

            // const { diameter } = rodParameters;

            // const { width, length, thickness } = sheetParameters;
            return (
              <TableRow
                key={material._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
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

                    // onClick={() => openModal(_id)}
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
  );
};
