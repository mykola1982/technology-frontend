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
  length: "",
  width: "",
  thickness: "",
  weight: "",
};

const validationSchema = yup.object().shape({
  brand: yup.string().required("Це поле є обов'язковим"),
  width: yup
    .number()
    .required("Це поле є обов'язковим")
    .moreThan(0, "Значення повинно бути більше 0")
    .notOneOf([0], "Значення не може бути рівним 0"),
  length: yup
    .number()
    .required("Це поле є обов'язковим")
    .moreThan(0, "Значення повинно бути більше 0")
    .notOneOf([0], "Значення не може бути рівним 0"),
  thickness: yup
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

export const AddSheetForm = ({
  type,
  onClearType,
  onClose,
  materialToUpdate = null,
}) => {
  if (materialToUpdate) {
    initialValues.brand = materialToUpdate.brand;
    initialValues.width = materialToUpdate.sheetParameters.width;
    initialValues.length = materialToUpdate.sheetParameters.length;
    initialValues.thickness = materialToUpdate.sheetParameters.thickness;
    initialValues.weight = materialToUpdate.weight;
  } else {
    initialValues.brand = "";
    initialValues.width = "";
    initialValues.length = "";
    initialValues.thickness = "";
    initialValues.weight = "";
  }

  const dispatch = useDispatch();

  const handleSubmit = (
    { brand, width, length, thickness, weight },
    { resetForm }
  ) => {
    if (!materialToUpdate) {
      const newMaterial = {
        type,
        brand,
        sheetParameters: { width, length, thickness },
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
          sheetParameters: { width, length, thickness },
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
        id="thickness"
        type="number"
        name="thickness"
        inputProps={{ min: "0", step: "0.1" }}
        label="Товщина листа, мм."
        placeholder="Введіть товщину листа."
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
        inputProps={{ min: "0", step: "0.1" }}
        label="Довжина листа, мм."
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
        inputProps={{ min: "0", step: "0.1" }}
        label="Ширина листа, мм."
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
        inputProps={{ min: "0", step: "0.001" }}
        label="Вага листа,кг."
        placeholder="Введіть вагу листа"
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
