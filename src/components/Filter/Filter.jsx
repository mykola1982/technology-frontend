import { TextField } from "@mui/material";

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <TextField
        id="filled-search"
        label="Пошук деталі"
        type="search"
        variant="outlined"
        name="filter"
        sx={{
          width: "300px",
        }}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
