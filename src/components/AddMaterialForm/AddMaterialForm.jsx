import { useState } from "react";

import { nanoid } from "nanoid";

import { TextField, Typography, MenuItem, Box } from "@mui/material";

import { AddSheetForm } from "components/AddSheetForm";
import { AddRodForm } from "components/AddRodForm";

import { typeMaterialData } from "data/typeMaterialData";

export const AddMaterialForm = ({ onClose }) => {
  const [materialType, setMaterialType] = useState("");

  const handleClearType = () => {
    setMaterialType("");
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setMaterialType(selectedType);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",

        width: "100%",
        padding: "8px",
      }}
    >
      <Typography> Добавити матеріл до списку:</Typography>

      <TextField
        select
        name="type"
        size="small"
        value={materialType}
        label="Тип матеріалу"
        onChange={handleTypeChange}
      >
        {typeMaterialData.map(({ label, value }) => (
          <MenuItem key={nanoid()} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      {materialType === "sheet" && (
        <AddSheetForm
          type={materialType}
          onClearType={handleClearType}
          onClose={onClose}
        />
      )}
      {materialType === "rod" && (
        <AddRodForm
          type={materialType}
          onClearType={handleClearType}
          onClose={onClose}
        />
      )}
    </Box>
  );
};

// ________________________________________
// import { useState } from "react";

// import * as yup from "yup";

// import { useFormik } from "formik";

// import {
//   Button,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   RadioGroup,
//   Radio,
//   FormHelperText,
//   TextField,
// } from "@mui/material";

// const initialValues = {
//   type: "",
//   brand: "",
//   sheetParameters: { width: "", length: "", thickness: "" },
//   rodParameters: { diameter: "" },
//   weight: "",
// };

// const validationSchema = yup.object().shape({
//   type: yup.string().oneOf(["sheet", "rod"]).required("Це поле є обов'язковим"),
//   brand: yup.string().required("Це поле є обов'язковим"),

//   sheetParameters: yup.object().when("type", {
//     is: (type) => type === "sheet",
//     then: yup.object().shape({
//       width: yup.string().required("Це поле є обов'язковим"),
//       length: yup.string().required("Це поле є обов'язковим"),
//       thickness: yup.string().required("Це поле є обов'язковим"),
//     }),
//     otherwise: yup.object().strip(),
//   }),

//   rodParameters: yup.object().when("type", {
//     is: (type) => type === "rod",
//     then: yup
//       .object()
//       .shape({ diameter: yup.string().required("Це поле є обов'язковим") }),
//     otherwise: yup.object().strip(),
//   }),
//   weight: yup.number().required("Це поле є обов'язковим"),
// });

// export const AddMaterialForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema: () => validationSchema(),
//     onSubmit: handleSubmit,
//   });

//   let labelWeight;
//   if (formik.values.type === "sheet") {
//     labelWeight = "Вага листа,кг.";
//   } else if (formik.values.type === "rod") {
//     labelWeight = "Вага одного м.п. прута,кг.";
//   }

//   let placeholderWeight;

//   if (formik.values.type === "sheet") {
//     placeholderWeight = "Введіть вагу листа,кг.";
//   } else if (formik.values.type === "rod") {
//     placeholderWeight = "Введіть вагу одного м.п. прута,кг.";
//   }

//   return (
//     <FormControl
//       variant="standard"
//       component="form"
//       onSubmit={formik.handleSubmit}
//     >
//       <FormLabel id="radio-buttons-group-type">Тип метеріалу:</FormLabel>
//       <RadioGroup
//         name="type"
//         aria-labelledby="radio-buttons-group-type"
//         value={formik.values.type}
//         onChange={formik.handleChange}
//       >
//         <FormControlLabel value="sheet" control={<Radio />} label="Лист" />
//         <FormControlLabel value="rod" control={<Radio />} label="Круг" />
//       </RadioGroup>
//       {formik.touched.type && Boolean(formik.errors.type) && (
//         <FormHelperText sx={{ margin: "4px 14px 0 14px", color: "#d32f2f" }}>
//           {formik.touched.type && formik.errors.type}
//         </FormHelperText>
//       )}
//       <TextField
//         id="brand"
//         type="text"
//         name="brand"
//         label="Марка матеріалу"
//         placeholder="Введіть марку матеріалу"
//         size="small"
//         value={formik.values.brand}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.brand && Boolean(formik.errors.brand)}
//         helperText={formik.touched.brand && formik.errors.brand}
//       />

//       {formik.values.type === "sheet" && (
//         <>
//           <TextField
//             id="width"
//             type="number"
//             name="sheetParameters.width"
//             label="Ширина листа"
//             placeholder="Введіть ширину листа"
//             size="small"
//             value={formik.values.sheetParameters.width}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.width && Boolean(formik.errors.width)}
//             helperText={formik.touched.width && formik.errors.width}
//           />
//           <TextField
//             id="length"
//             type="number"
//             name="sheetParameters.length"
//             label="Довжина листа"
//             placeholder="Введіть довжину листа"
//             size="small"
//             value={formik.values.sheetParameters.length}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.length && Boolean(formik.errors.length)}
//             helperText={formik.touched.length && formik.errors.length}
//           />
//           <TextField
//             id="thickness"
//             type="number"
//             name="sheetParameters.thickness"
//             inputProps={{ min: "0.1", step: "0.1" }}
//             label="Товщина листа"
//             placeholder="Введіть товщину листа"
//             size="small"
//             value={formik.values.thickness}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.thickness && Boolean(formik.errors.thickness)}
//             helperText={formik.touched.thickness && formik.errors.thickness}
//           />
//         </>
//       )}

//       {formik.values.type === "rod" && (
//         <TextField
//           id="diameter"
//           type="number"
//           name="rodParameters.diameter"
//           label="Діаметер прута"
//           placeholder="Введіть діаметер, мм."
//           size="small"
//           value={formik.values.rodParameters.diameter}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.diameter && Boolean(formik.errors.diameter)}
//           helperText={formik.touched.diameter && formik.errors.diameter}
//         />
//       )}

//       {formik.values.type && (
//         <TextField
//           id="weight"
//           type="number"
//           name="weight"
//           inputProps={{ min: "0.001", step: "0.001" }}
//           label={labelWeight}
//           placeholder={placeholderWeight}
//           size="small"
//           value={formik.values.weight}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.weight && Boolean(formik.errors.weight)}
//           helperText={formik.touched.weight && formik.errors.weight}
//         />
//       )}
//       <Button
//         type="submit"
//         variant="contained"
//         size="large"
//         sx={{ width: "300px", margin: "0 auto" }}
//       >
//         Додати матеріал
//       </Button>
//     </FormControl>
//   );
// };
