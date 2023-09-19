import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import { tableCellClasses } from "@mui/material/TableCell";

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
                {el.type === "sheet" && (
                  <>
                    <Typography component="span">
                      Лист {el.brand} {el.sheetParameters.thickness.toFixed(1)}x
                      {el.sheetParameters.length}x{el.sheetParameters.width}
                    </Typography>{" "}
                    <Typography component="span" sx={{ fontWeight: 500 }}>
                      ({el.weight} кг.)
                    </Typography>
                  </>
                )}
                {el.type === "rod" && (
                  <>
                    <Typography component="span">
                      Круг {el.brand} {el.rodParameters.diameter.toFixed(1)}
                    </Typography>{" "}
                    <Typography component="span" sx={{ fontWeight: 500 }}>
                      ({el.weight} кг.)
                    </Typography>
                  </>
                )}
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
