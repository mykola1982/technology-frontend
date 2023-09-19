import { Link } from "react-router-dom";

import {
  Box,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { nanoid } from "nanoid";

import { formatDate, formatTime, getTotalWeight } from "utils";

import { useAuth } from "hooks";

export const OrdersList = ({
  orders,
  location,
  openModal,
  updateToDeleteOrder,
}) => {
  const loginedUser = useAuth().user;

  // винести в окрему функцію
  const reverseOrders = orders.reduce((acc, element) => {
    return (acc = [element, ...acc]);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow
            sx={{ position: "sticky", top: 0, zIndex: 1, background: "#fff" }}
          >
            <TableCell align="center"> № п.п </TableCell>
            <TableCell align="center"> Користувач, дата та час </TableCell>
            <TableCell align="center">
              Найменування деталей та кількість деталей в замовленні
            </TableCell>
            <TableCell align="center">
              Сортамент та кількість потрібного металу для виконання замовлення
            </TableCell>
            <TableCell align="center">Друкувати</TableCell>
            <TableCell align="center">Видалити</TableCell>
            <TableCell align="center">На видалення</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reverseOrders.map((order, index) => {
            const { _id, user, createdAt, products, materials, toRemove } =
              order;

            return (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell aling="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "4px",
                    }}
                  >
                    <Typography variant="p" sx={{ fontWeight: 500 }}>
                      {user}
                    </Typography>
                    <Typography variant="p">{formatDate(createdAt)}</Typography>
                    <Typography variant="p">{formatTime(createdAt)}</Typography>
                  </Box>
                </TableCell>
                <TableCell aling="center" sx={{ verticalAlign: "top" }}>
                  {products.map(({ name, number, reserved }, index) => {
                    return (
                      <Box key={nanoid()} sx={{ mb: 1 }}>
                        <Typography variant="p">
                          {index + 1}. {name} {number}{" "}
                        </Typography>
                        <Typography variant="p" sx={{ fontWeight: 500 }}>
                          - {reserved} шт.
                        </Typography>
                      </Box>
                    );
                  })}
                </TableCell>
                <TableCell aling="center" sx={{ verticalAlign: "top" }}>
                  <>
                    {materials.map((material, index) => {
                      const { type, brand, amount, weight } = material;

                      return (
                        <Box key={nanoid()} sx={{ mb: 1 }}>
                          <Typography variant="p">
                            {index + 1}.
                            {type === "sheet" && (
                              <>
                                {" "}
                                <Typography component="span">
                                  {" "}
                                  Лист {brand}{" "}
                                  {material.sheetParameters.thickness.toFixed(
                                    1
                                  )}
                                  x{material.sheetParameters.length}x
                                  {material.sheetParameters.width}
                                </Typography>{" "}
                                <Typography
                                  component="span"
                                  sx={{ fontWeight: 500 }}
                                >
                                  ({weight} кг.)
                                </Typography>{" "}
                                <Typography
                                  component="span"
                                  sx={{ fontWeight: 500 }}
                                >
                                  - {amount.toFixed(3)} листів
                                </Typography>
                              </>
                            )}
                            {type === "rod" && (
                              <>
                                {" "}
                                <Typography component="span">
                                  {" "}
                                  Круг {brand}{" "}
                                  {material.rodParameters.diameter.toFixed(1)}
                                </Typography>{" "}
                                <Typography
                                  component="span"
                                  sx={{ fontWeight: 500 }}
                                >
                                  ({weight} кг.)
                                </Typography>{" "}
                                <Typography
                                  component="span"
                                  sx={{ fontWeight: 500 }}
                                >
                                  - {amount.toFixed(3)} м.п.
                                </Typography>
                              </>
                            )}
                          </Typography>
                        </Box>
                      );
                    })}
                    <Typography variant="p" sx={{ fontWeight: 700, ml: 2 }}>
                      Загальна вага: {getTotalWeight(materials)} кг
                    </Typography>
                  </>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    component={Link}
                    to={`/orders/${_id}`}
                    state={{ from: location }}
                    sx={{ color: "#1976d2" }}
                    aria-label="print order"
                    size="medium"
                  >
                    <PrintIcon fontSize="medium" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    sx={{ color: "#1976d2" }}
                    aria-label="delete order"
                    size="medium"
                    onClick={() => openModal(_id)}
                    disabled={loginedUser.role !== "ADMIN"}
                  >
                    <DeleteForeverIcon fontSize="medium" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Checkbox
                    inputProps={{ "aria-label": "Checkbox demo" }}
                    checked={toRemove}
                    onChange={() => {
                      updateToDeleteOrder(_id);
                    }}
                    sx={{
                      color: "#1976d2",
                      "&.Mui-checked": {
                        color: "#DC143C",
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
