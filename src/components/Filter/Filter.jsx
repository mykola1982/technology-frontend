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
        size="small"
        sx={{
          width: "300px",
        }}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
