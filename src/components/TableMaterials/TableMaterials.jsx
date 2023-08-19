import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { nanoid } from "nanoid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#808080",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TableMaterials = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 860,
      }}
    >
      <Table sx={{ minWidth: 500, display: "inline-block" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" sx={{ p: 1, width: "60px" }}>
              № п.п
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ p: 1, width: "400px" }}>
              Сортамент
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ p: 1, width: "400px" }}>
              Кількість лістів&nbsp;(шт)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el, index) => (
            <StyledTableRow key={nanoid()}>
              <StyledTableCell
                component="th"
                scope="row"
                align="center"
                sx={{ p: 1 }}
              >
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ p: 1 }}>
                {el.thickness}x{el.sheet}
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ p: 1 }}>
                {Math.ceil(el.amount)}({el.amount.toFixed(2)})
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
