import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { getMetalConsumption } from "../../utils/getMetalConsumption";

export const SelectedProductList = ({ products, onDeleteProductFromOrder }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow
            sx={{ position: "sticky", top: 0, zIndex: 1, background: "#fff" }}
          >
            <TableCell align="center">№ п.п.</TableCell>
            <TableCell align="center">Найменування</TableCell>
            <TableCell align="center">Кіл.(шт.)</TableCell>
            <TableCell align="center">Матеріал</TableCell>
            <TableCell align="center">Вага(кг.)</TableCell>
            <TableCell align="center">Норма(кг.)</TableCell>
            <TableCell align="center">
              Hoрма <br />
              (в част. листа/
              <br /> в част м. п.)
            </TableCell>
            <TableCell align="center">Видалити</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => {
            const { _id, name, number, reserved, weight, quantity, material } =
              product;
            return (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ overflowWrap: "break-word" }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ overflowWrap: "break-word" }}
                    >
                      {number}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">{reserved}</TableCell>

                {material?.type === "sheet" && (
                  <TableCell align="center">
                    Лист {material.sheetParameters.thickness}x
                    {material.sheetParameters.length}x
                    {material.sheetParameters.width} {material.brand}
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      {" "}
                      ({material.weight} кг.)
                    </Typography>
                  </TableCell>
                )}

                {material?.type === "rod" && (
                  <TableCell align="center">
                    Круг {material.rodParameters.diameter} {material.brand}
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      {" "}
                      ({material.weight} кг.)
                    </Typography>
                  </TableCell>
                )}
                <TableCell align="center">{weight}</TableCell>
                <TableCell align="center">
                  {getMetalConsumption(material, quantity)}
                </TableCell>

                {material?.type === "sheet" && (
                  <TableCell align="center">
                    {(1 / product.quantity).toFixed(4)}
                  </TableCell>
                )}

                {material?.type === "rod" && (
                  <TableCell align="center">
                    {(6 / product.quantity).toFixed(4)}
                  </TableCell>
                )}

                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    sx={{ color: "#1976d2" }}
                    onClick={() => onDeleteProductFromOrder(_id)}
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
