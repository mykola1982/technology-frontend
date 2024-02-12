import { nanoid } from "nanoid";
import * as yup from "yup";

import { useFormik } from "formik";

import { FormControl, Button, TextField, Formlabel } from "@mui/material";

const validationSchema = yup.object().shape({
  name: yup.string().required("Це поле є обовязковим"),
  number: yup.string().required("Це поле є обовязковим"),
});

const initialValues = {
  name: "",
  number: "",
};

export const AddComponentForm = (onSubmit, onClose) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("клацнув на відправку форми");
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
    >
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ width: "300px", margin: "0 auto" }}
      >
        Створити виріб
      </Button>
    </FormControl>
  );
};
