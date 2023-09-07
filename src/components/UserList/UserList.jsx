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
import { useAuth } from "hooks";

export const UserList = ({ users, openModal }) => {
  const loginedUser = useAuth().user;

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow
            sx={{ position: "sticky", top: 0, zIndex: 1, background: "#fff" }}
          >
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
                    size="medium"
                    disabled={isAdmin || loginedUser.role === "USER"}
                    onClick={() => openModal(_id)}
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
