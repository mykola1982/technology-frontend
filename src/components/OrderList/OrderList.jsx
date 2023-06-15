import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

import { nanoid } from "nanoid";

export const OrderList = ({ orders }) => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {reverseOrders.map((order, index) => {
            const { _id, createdAt, products, materials } = order;

            //  винести в окрему функцію
            const dateTime = new Date(createdAt);

            const formattedDate = dateTime.toLocaleDateString("uk-UA");
            const formattedTime = dateTime.toLocaleTimeString("uk-UA", {
              hour12: false,
            });

            const formattedDateTime = `${formattedDate} ${formattedTime}`;
            //   _____________

            return (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell aling="center">{formattedDateTime}</TableCell>
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
