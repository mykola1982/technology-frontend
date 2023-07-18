import { Box } from "@mui/material";

import { MyContainer } from "../../components/MyContainer";
import { AddUserForm } from "../../components/AddUserForm";

const Users = () => {
  return (
    <MyContainer>
      <Box
        sx={{
          width: "100%",
          borderRadius: 4,
          display: "flex",
          mt: 10,
          mb: 2,
          p: 1,
          backgroundColor: "#f5f5f5",
          boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
        }}
      >
        <AddUserForm />
      </Box>
    </MyContainer>
  );
};

export default Users;
