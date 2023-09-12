import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";

import { Button, FormControl, TextField } from "@mui/material";

import {
  addMaterial,
  updateMaterial,
} from "redux/materials/materialsOperation";

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

export const AddRodForm = ({
  type,
  onClearType,
  onClose,
  materialToUpdate = null,
}) => {
  if (materialToUpdate) {
    initialValues.brand = materialToUpdate.brand;
    initialValues.diameter = materialToUpdate.rodParameters.diameter;
    initialValues.weight = materialToUpdate.weight;
  } else {
    initialValues.brand = "";
    initialValues.diameter = "";
    initialValues.weight = "";
  }

  const dispatch = useDispatch();

  const handleSubmit = ({ brand, diameter, weight }, { resetForm }) => {
    if (!materialToUpdate) {
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
    } else {
      const data = {
        id: materialToUpdate._id,
        body: {
          type: materialToUpdate.type,
          brand,
          rodParameters: { diameter },
          weight,
        },
      };

      dispatch(updateMaterial(data)).then((res) => {
        if (!res.error) {
          resetForm();
          onClose();
        }
      });
    }
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
        padding: materialToUpdate ? "8px" : "0",
      }}
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
        {!materialToUpdate ? "Додати матеріал" : "Редагувати матеріал"}
      </Button>
    </FormControl>
  );
};
