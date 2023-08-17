import { Link } from "react-router-dom";

import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";

import { nanoid } from "nanoid";
import { formatDate } from "utils/formatDate";

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
            <TableCell align="center"> Дата створення </TableCell>
            <TableCell align="center">
              Найменування деталей та кількість деталей в замовленні
            </TableCell>
            <TableCell align="center">
              Сортамент та кількість потрібного металу для виконання замовлення
            </TableCell>
            <TableCell align="center">Дії</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reverseOrders.map((order, index) => {
            const { _id, createdAt, products, materials } = order;

            const formattedDateTime = formatDate(createdAt);

            return (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell aling="center">
                  {formattedDateTime} {order.user}
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
                  {materials.map(({ sheet, thickness, amount }, index) => {
                    return (
                      <p key={nanoid()}>
                        {index + 1}. {thickness}x{sheet} - {amount.toFixed(3)}{" "}
                        листів.
                      </p>
                    );
                  })}
                </TableCell>
                <TableCell aling="center">
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
