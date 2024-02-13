import { useState } from "react";

import { nanoid } from "nanoid";
import * as yup from "yup";

import { useFormik } from "formik";

import { FormControl, Button, TextField, Formlabel } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const validationSchema = yup.object().shape({
  name: yup.string().required("Це поле є обовязковим"),
  number: yup.string().required("Це поле є обовязковим"),
});

const initialValues = {
  name: "",
  number: "",
};

export const AddComponentForm = ({ onClose }) => {
  const [counterProducts, setCounterProducts] = useState(1);

  const handleSubmit = (values, { resetForm }) => {
    console.log("клацнув на відправку форми");
    console.log(values);
    onClose();
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
        width: "100%",
        padding: "8px",
      }}
    >
      <TextField
        id="name"
        type="text"
        name="name"
        label="Найменування виробу"
        placeholder="Введіть найменування виробу"
        size="small"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="number"
        type="text"
        name="number"
        label="Децимальний номер"
        placeholder="Введіть децимальний номер"
        size="small"
        value={formik.values.number}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
      />
      <div>
        <TextField select size="small" /> <TextField type="number" />
        <Button
          type="button"
          variant="contained"
          size="small"
          startIcon={<RemoveCircleOutlineIcon />}
          onClick={() => {
            setCounterProducts(
              (prevCounterProducts) => prevCounterProducts - 1
            );
            console.log(counterProducts);
          }}
        />
      </div>

      <Button
        type="button"
        variant="contained"
        size="small"
        startIcon={<PostAddIcon />}
        onClick={() => {
          setCounterProducts((prevCounterProducts) => prevCounterProducts + 1);
          console.log(counterProducts);
        }}
      />
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
