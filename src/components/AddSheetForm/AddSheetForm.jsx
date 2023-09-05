import { useDispatch } from "react-redux";

import * as yup from "yup";

import { useFormik } from "formik";

import { Button, FormControl, TextField } from "@mui/material";

import { addMaterial } from "redux/materials/materialsOperation";

const initialValues = {
  brand: "",
  width: "",
  length: "",
  thickness: "",
  weight: "",
};

const validationSchema = yup.object().shape({
  brand: yup.string().required("Це поле є обов'язковим"),
  width: yup.number().required("Це поле є обов'язковим"),
  length: yup.number().required("Це поле є обов'язковим"),
  thickness: yup.number().required("Це поле є обов'язковим"),
  weight: yup.number().required("Це поле є обов'язковим"),
});

export const AddSheetForm = ({ type }) => {
  const dispath = useDispatch();

  const handleSubmit = (
    { brand, width, length, thickness, weight },
    { resetForm }
  ) => {
    const newMaterial = {
      type,
      brand,
      sheetParameters: { width, length, thickness },
      weight,
    };

    dispath(addMaterial(newMaterial)).then((res) => {
      if (!res.error) {
        resetForm();
      }
    });
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
      <TextField
        id="brand"
        type="text"
        name="brand"
        label="Марка матеріалу"
        placeholder="Введіть марку матеріалу"
        size="small"
        value={formik.values.brand}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.brand && Boolean(formik.errors.brand)}
        helperText={formik.touched.brand && formik.errors.brand}
      />

      <TextField
        id="thickness"
        type="number"
        name="thickness"
        inputProps={{ min: "0.1", step: "0.1" }}
        label="Товщина листа"
        placeholder="Введіть товщину листа"
        size="small"
        value={formik.values.thickness}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.thickness && Boolean(formik.errors.thickness)}
        helperText={formik.touched.thickness && formik.errors.thickness}
      />

      <TextField
        id="length"
        type="number"
        name="length"
        label="Довжина листа"
        placeholder="Введіть довжину листа"
        size="small"
        value={formik.values.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.length && Boolean(formik.errors.length)}
        helperText={formik.touched.length && formik.errors.length}
      />

      <TextField
        id="width"
        type="number"
        name="width"
        label="Ширина листа"
        placeholder="Введіть ширину листа"
        size="small"
        value={formik.values.width}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.width && Boolean(formik.errors.width)}
        helperText={formik.touched.width && formik.errors.width}
      />

      <TextField
        id="weight"
        type="number"
        name="weight"
        inputProps={{ min: "0.001", step: "0.001" }}
        label="Вага листа,кг."
        placeholder="Введіть вагу листа,кг."
        size="small"
        value={formik.values.weight}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.weight && Boolean(formik.errors.weight)}
        helperText={formik.touched.weight && formik.errors.weight}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ width: "300px", margin: "0 auto" }}
      >
        Додати матеріал
      </Button>
    </FormControl>
  );
};
