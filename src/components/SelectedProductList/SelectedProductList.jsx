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
          <TableRow>
            <TableCell align="center">№ п.п.</TableCell>
            <TableCell align="center">Найменування</TableCell>
            <TableCell align="center">Кіл.(шт.)</TableCell>
            <TableCell align="center">Матеріал</TableCell>
            <TableCell align="center">Вага(кг.)</TableCell>
            <TableCell align="center">Норма(кг.)</TableCell>
            <TableCell align="center">Hoрма(в част. листа) </TableCell>
            <TableCell align="center">Видалити</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => {
            const {
              _id,
              name,
              number,
              reserved,
              weight,
              quantity,
              material: { sheet, thickness },
            } = product;
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
                <TableCell align="center">
                  {product.material.thickness}x{product.material.sheet}
                </TableCell>
                <TableCell align="center">{weight}</TableCell>
                <TableCell align="center">
                  {getMetalConsumption(quantity, sheet, thickness)}
                </TableCell>
                <TableCell align="center">
                  {(1 / product.quantity).toFixed(5)}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => onDeleteProductFromOrder(_id)}
                  >
                    <DeleteForeverIcon
                      fontSize="small"
                      sx={{ color: "#1976d2" }}
                    />
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
