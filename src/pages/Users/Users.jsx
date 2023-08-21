import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Box } from "@mui/material";

import * as usersAPI from "services/user-API";

import { MyContainer } from "components/MyContainer";
import { AddUserForm } from "components/AddUserForm";
import { UserList } from "components/UserList";
import { ModalSmall } from "components/ModalSmall";
import { ContentModalDelete } from "components/ContentModalDelete";
import { Loader } from "components/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idUserToDeleteUser, setIdUserToDeleteUser] = useState(null);

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        const { data } = await usersAPI.fetchAllUsersAPI();

        setUsers(data);
      } catch (error) {
        toast.error(`Щось пішло не так. Спробуй знову...`);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    getAllUsers();
  }, []);

  const openModalDelete = (id) => {
    setShowModalDelete(true);
    setIdUserToDeleteUser(id);
  };
  const closeModalDelete = () => {
    setShowModalDelete(false);
  };

  const addUser = async (credentials) => {
    const newUsers = credentials;
    try {
      setIsLoading(true);
      const { data } = await usersAPI.addUserAPI(newUsers);
      setUsers((prevUsers) => [...prevUsers, data.user]);
      toast.success(
        ` Користувача  ${credentials.name} успішно додана до списку`
      );
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`Користувач з іменем ${credentials.name} вже є в списку`);
      } else {
        toast.error(`Щось пішло не так. Спробуй знову...`);
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      setIsLoading(true);
      await usersAPI.removeUserAPI(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      toast.success(`Користувач успішно видалений`);
    } catch (error) {
      toast.error(`Щось пішло не так. Спробуй знову...`);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    await deleteUser(idUserToDeleteUser);
    setIdUserToDeleteUser(null);
    closeModalDelete();
  };

  return (
    <>
      {isLoading && <Loader />}
      <MyContainer>
        <Box
          sx={{
            width: "380px",
            justifyContent: "center",
            borderRadius: 4,
            display: "flex",
            mt: 10,
            mb: 6,
            p: 1,
            pt: 3,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <AddUserForm addUser={addUser} />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            borderRadius: 4,
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            mt: 10,
            mb: 6,
            p: 1,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <UserList users={users} openModal={openModalDelete} />
        </Box>
      </MyContainer>
      <ModalSmall open={showModalDelete} onClose={closeModalDelete}>
        <ContentModalDelete
          title={"Ви бажаєте видалити користувача"}
          onDelete={handleDelete}
          onClose={closeModalDelete}
        />
      </ModalSmall>
    </>
  );
};

export default Users;
