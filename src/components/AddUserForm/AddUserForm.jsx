import { useDispatch } from "react-redux";
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

import { register } from "redux/auth/authOperation";
import { useAuth } from "hooks";

const validationSchema = yup.object().shape({
  name: yup.string().required("Це поле є обовязкове"),
  password: yup
    .string()
    .min(8, "Пароль повинен мати не менше 8 символів")
    .required("This field is required"),
  role: yup.string().oneOf(["ADMIN", "USER"]).required("Це поле є обовязкове"),
});

const initialValues = {
  name: "",
  password: "",
  role: "USER",
};

export const AddUserForm = () => {
  const { isLoading, user } = useAuth();

  const isAdmin = user.role === "ADMIN";

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    console.log("мив формі");
    console.log(values);
    try {
      await dispatch(register(values));
    } catch (error) {}

    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormControl
      variant="standard"
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",
        // justifyContent: "center",
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
      <TextField
        id="password"
        name="password"
        label="Пароль"
        placeholder="Введіть пароль"
        type="text"
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
