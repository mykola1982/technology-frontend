import { nanoid } from "nanoid";
import * as yup from "yup";

import { useFormik } from "formik";

import {
  FormControl,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  MenuItem,
} from "@mui/material";

import { getMaterials } from "data/fakeAPI";
import { getUniqueValues } from "utils";
import { workshop } from "data/workshop";

const validationSchema = yup.object().shape({
  name: yup.string().required("Це поле є обов'язковим"),
  number: yup.string().required("Це поле є обов'язковим"),
  weight: yup
    .number()
    .required("Це поле є обов'язковим")
    .min(0.001, "Вага деталі повинна бути не менше 0.001 кг"),
  quantity: yup
    .number()
    .required("Це поле є обов'язковим")
    .min(1, "Кількість деталей з листа повинно бути не менше 1 шт."),
  workshop: yup.string().required("Це поле є обов'язковим"),
  thickness: yup.string().required("Це поле є обов'язковим"),
  sheet: yup.string().required("Це поле є обов'язковим"),
});

console.log(validationSchema);
const initialValues = {
  name: "",
  number: "",
  weight: "",
  quantity: "",
  workshop: "",
  thickness: "",
  sheet: "",
};

export const AddProductForm = ({
  onSubmit,
  onClose,
  productForUpdate = null,
}) => {
  if (productForUpdate) {
    initialValues.name = productForUpdate.name;
    initialValues.number = productForUpdate.number;
    initialValues.weight = productForUpdate.weight;
    initialValues.quantity = productForUpdate.quantity;
    initialValues.workshop = productForUpdate.workshop;
    initialValues.thickness = productForUpdate.material.thickness;
    initialValues.sheet = productForUpdate.material.sheet;
  } else {
    initialValues.name = "";
    initialValues.number = "";
    initialValues.weight = "";
    initialValues.quantity = "";
    initialValues.workshop = "";
    initialValues.thickness = "";
    initialValues.sheet = "";
  }

  const materials = getMaterials();

  const valuesSheet = getUniqueValues(materials, "sizeSheet");

  const valuesThikness = getUniqueValues(materials, "thicknessSheet");

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
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
        label="Найменування"
        placeholder="Введіть найменування"
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
      />

      <TextField
        id="weight"
        type="number"
        name="weight"
        inputProps={{ min: "0.001", step: "0.001" }}
        label="Вага деталі, кг."
        placeholder="Введіть вагу деталі"
        size="small"
        value={formik.values.weight}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.weight && Boolean(formik.errors.weight)}
        helperText={formik.touched.weight && formik.errors.weight}
      />

      <TextField
        id="quantity"
        type="number"
        name="quantity"
        inputProps={{ min: "1", step: "1" }}
        label="Кількість деталей з листа, шт."
        placeholder="Введіть кількість деталей з листа"
        size="small"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.quantity && Boolean(formik.errors.quantity)}
        helperText={formik.touched.quantity && formik.errors.quantity}
      />
      <FormLabel id="radio-workshop">Виберіть виробничу дільницю:</FormLabel>

      <RadioGroup
        name="workshop"
        aria-labelledby="radio-workshop"
        value={formik.values.workshop}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          value={workshop.CNC}
          control={<Radio size="small" />}
          label="ЧПУ"
        />

        <FormControlLabel
          value={workshop.PRESSING}
          control={<Radio size="small" />}
          label="Штамповка"
        />
      </RadioGroup>
      {formik.touched.workshop && Boolean(formik.errors.workshop) && (
        <FormHelperText sx={{ margin: "4px 14px 0 14px", color: "#d32f2f" }}>
          {formik.touched.workshop && formik.errors.workshop}
        </FormHelperText>
      )}

      <TextField
        select
        name="thickness"
        size="small"
        value={formik.values.thickness}
        label="Товщина матеріалу"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.thickness && Boolean(formik.errors.thickness)}
        helperText={formik.touched.thickness && formik.errors.thickness}
      >
        {valuesThikness.map((value) => (
          <MenuItem key={nanoid()} value={value}>
            {value} мм.
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        name="sheet"
        size="small"
        value={formik.values.sheet}
        label="Розмір листа матеріалу"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sheet && Boolean(formik.errors.sheet)}
        helperText={formik.touched.sheet && formik.errors.sheet}
      >
        {valuesSheet.map((material) => (
          <MenuItem key={nanoid()} value={material}>
            {material}
          </MenuItem>
        ))}
      </TextField>

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ width: "300px", margin: "0 auto" }}
      >
        {!productForUpdate ? (
          <span>Додати деталь </span>
        ) : (
          <span>Редагувати дані</span>
        )}
      </Button>
    </FormControl>
  );
};
