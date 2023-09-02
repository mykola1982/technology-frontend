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

export const MaterialsList = ({ materials }) => {
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
            console.log(material);
            const { _id, sizeSheet, thicknessSheet, weightSheet } = material;

            return (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">
                  {thicknessSheet}x{sizeSheet}
                </TableCell>
                <TableCell align="center">{weightSheet}</TableCell>
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
