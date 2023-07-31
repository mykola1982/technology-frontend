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

export const UserList = ({ users, openModal }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">№ п.п.</TableCell>
            <TableCell align="center">Ім'я</TableCell>
            <TableCell align="center">Права</TableCell>
            <TableCell align="center">Видалити</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users?.map((user, index) => {
            const { _id, name, role } = user;
            const isAdmin = role === "ADMIN";
            return (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center"> {name}</TableCell>
                <TableCell align="center">
                  {isAdmin ? "Адміністратор" : "Користувач"}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    sx={{ color: "#1976d2" }}
                    aria-label="delete"
                    size="small"
                    disabled={isAdmin}
                    onClick={() => openModal(_id)}
                  >
                    <DeleteForeverIcon fontSize="small" />
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
