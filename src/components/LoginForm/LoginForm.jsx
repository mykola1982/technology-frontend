import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { FormControl, Box, TextField, IconButton } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";

import { logIn } from "redux/auth/authOperation";
import { useAuth } from "hooks/useAuth";

const validationSchema = yup.object().shape({
  name: yup.string().required("Це поле є обовязкове"),
  password: yup.string().required("Це поле є обовязкове"),
});

const initialValues = {
  name: "",
  password: "",
};

export const LoginForm = () => {
  const [typeInputPassword, setTypeInputPassword] = useState("password");
  const { isLoading } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      await dispatch(logIn(values));
    } catch (error) {}
  };

  const showPassword = () => {
    if (typeInputPassword === "password") {
      setTypeInputPassword("text");
    } else if (typeInputPassword === "text") {
      setTypeInputPassword("password");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormControl
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <TextField
        id="name"
        name="name"
        label="Логін"
        placeholder="Введіть ім'я користувача"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Box sx={{ display: "flex", gap: "4px" }}>
        <TextField
          id="password"
          name="password"
          label="Пароль"
          placeholder="Введіть пароль"
          type={typeInputPassword}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <IconButton type="button" onClick={showPassword}>
          {typeInputPassword === "password" ? (
            <VisibilityOffIcon />
          ) : (
            <VisibilityIcon />
          )}
        </IconButton>
      </Box>

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        endIcon={<ExitToAppTwoToneIcon />}
        loading={isLoading}
        loadingPosition="center"
      >
        Увійти
      </LoadingButton>
    </FormControl>
  );
};
