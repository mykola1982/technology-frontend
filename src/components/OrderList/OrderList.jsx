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
import { formatDate } from "utils";
import { formatTime } from "utils";

export const OrderList = ({ orders, location }) => {
  // винести в окрему функцію
  const reverseOrders = orders.reduce((acc, element) => {
    return (acc = [element, ...acc]);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
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
            const { _id, user, createdAt, products, materials } = order;

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
                    <Typography variant="p" sx={{ fontWeight: 700 }}>
                      {user}
                    </Typography>
                    <Typography variant="p">{formatDate(createdAt)}</Typography>
                    <Typography variant="p">{formatTime(createdAt)}</Typography>
                  </Box>
                </TableCell>
                <TableCell aling="center">
                  {products.map(({ name, number, reserved }, index) => {
                    return (
                      <p key={nanoid()}>
                        {" "}
                        {index + 1}. {name}
                        {"  "}
                        {number} - {reserved} шт.
                      </p>
                    );
                  })}
                </TableCell>
                <TableCell aling="center">
                  <>
                    {" "}
                    {materials.map(({ sheet, thickness, amount }, index) => {
                      return (
                        <p key={nanoid()}>
                          {index + 1}. {thickness}x{sheet} - {amount.toFixed(3)}{" "}
                          листів.
                        </p>
                      );
                    })}
                    <p>Загальна вага: кг</p>
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
                  >
                    <DeleteForeverIcon fontSize="medium" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Checkbox
                    inputProps={{ "aria-label": "Checkbox demo" }}
                    defaultChecked
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
