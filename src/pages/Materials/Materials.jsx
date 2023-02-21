import { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { getMaterials } from "../../data/fakeAPI";
// import { autocompleteClasses } from "@mui/material";

const columns = [
  { id: "index", label: "№ п.п", minWidth: 50, align: "center" },
  {
    id: "sizeSheet",
    label: "Розмір та тип листа",
    minWidth: 100,
    align: "center",
  },
  {
    id: "thicknessSheet",
    label: "Товщина листа, мм",
    minWidth: 100,
    align: "center",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "weightSheet",
    label: "Вага листа, мм.",
    minWidth: 100,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "event",
    label: "Видалити",
    minWidth: 100,
    align: "center",
  },
];

const Materials = () => {
  const [materials, setMaterials] = useState(getMaterials());
  return (
    <Paper
      sx={{
        width: 850,
        // overflow: "hidden",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {materials.map((material, index) => {
              return (
                <>
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={material.id}
                  >
                    {columns.map((column) => {
                      let value = null;
                      if (column.id === "index") {
                        value = index + 1;
                      } else {
                        value = material[column.id];
                      }
                      if (column.id === "event") {
                        value = <button>Видалити дані</button>;
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <table>
        <thead>
          <tr>
            <th>№ п.п </th>
            <th>Розмір та тип листа</th>
            <th>Товщина листа, мм.</th>
            <th>Вага листа, мм.</th>
          </tr>
        </thead>

        <tbody>
          {materials.map(
            ({ id, sizeSheet, thicknessSheet, weightSheet }, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td> {sizeSheet}</td>
                <td>{thicknessSheet}</td>
                <td>{weightSheet}</td>
              </tr>
            )
          )}
        </tbody>
      </table> */}
    </Paper>
  );
};

export default Materials;
