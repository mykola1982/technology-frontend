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
      {!materialType && <Typography> Виберіть тип матеріалу</Typography>}

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
