import { useEffect, useCallback } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { useAuth } from "hooks";

const validationSchema = yup.object().shape({
  name: yup.string().required("Це поле є обов'язковим"),
  password: yup
    .string()
    .min(8, "Пароль повинен мати не менше 8 символів")
    .required("Це поле є обов'язковим"),
  role: yup
    .string()
    .oneOf(["ADMIN", "USER"])
    .required("Це поле є обов'язковим"),
});

const initialValues = {
  name: "",
  password: "",
  role: "USER",
};

export const AddUserForm = ({ addUser }) => {
  const { isLoading, user } = useAuth();

  const isAdmin = user.role === "ADMIN";

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addUser(values);
    } catch (error) {}

    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleDocumentClick = useCallback(
    (event) => {
      if (!event.target.closest("#addUserForm")) {
        formik.setTouched({});
      }
    },
    [formik]
  );

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <FormControl
      id="addUserForm"
      variant="standard"
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",
        width: "300px",
        overflowX: "auto",
        p: 1,
      }}
    >
      <TextField
        id="name"
        type="text"
        name="name"
        label="Логін"
        placeholder="Введіть ім'я користувача"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="password"
        type="text"
        name="password"
        label="Пароль"
        placeholder="Введіть пароль"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <FormLabel id="radio-buttons-group-label">Права:</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        value={formik.values.role}
        onChange={formik.handleChange}
        name="role"
      >
        <FormControlLabel
          value="ADMIN"
          control={<Radio />}
          label="Адміністратор"
        />
        <FormControlLabel value="USER" control={<Radio />} label="Користувач" />
      </RadioGroup>

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        startIcon={<PersonAddIcon />}
        loading={isLoading}
        loadingPosition="center"
        disabled={!isAdmin}
      >
        Створити користувача
      </LoadingButton>
    </FormControl>
  );
};
