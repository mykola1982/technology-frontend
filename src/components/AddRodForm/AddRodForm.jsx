import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";

import { Button, FormControl, TextField } from "@mui/material";

import { addMaterial } from "redux/materials/materialsOperation";

const initialValues = {
  brand: "",
  diameter: "",
  weight: "",
};

const validationSchema = yup.object().shape({
  brand: yup.string().required("Це поле є обов'язковим"),
  diameter: yup
    .number()
    .required("Це поле є обов'язковим")
    .moreThan(0, "Значення повинно бути більше 0")
    .notOneOf([0], "Значення не може бути рівним 0"),

  weight: yup
    .number()
    .required("Це поле є обов'язковим")
    .moreThan(0, "Значення повинно бути більше 0")
    .notOneOf([0], "Значення не може бути рівним 0"),
});

export const AddRodForm = ({ type, onClearType, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ brand, diameter, weight }, { resetForm }) => {
    const newMaterial = {
      type,
      brand,
      rodParameters: { diameter },
      weight,
    };

    dispatch(addMaterial(newMaterial)).then((res) => {
      if (!res.error) {
        resetForm();
        onClearType();
        onClose();
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
        id="diameter"
        type="number"
        name="diameter"
        inputProps={{ min: "0", step: "0,1" }}
        label="Діаметр круга, мм."
        placeholder="Введіть діаметр круга"
        size="small"
        value={formik.values.diameter}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.diameter && Boolean(formik.errors.diameter)}
        helperText={formik.touched.diameter && formik.errors.diameter}
      />

      <TextField
        id="weight"
        type="number"
        name="weight"
        inputProps={{ min: "0.001", step: "0.001" }}
        label="Вага одного м.п. круга,кг."
        placeholder="Введіть вагу одного м.п. круга"
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
