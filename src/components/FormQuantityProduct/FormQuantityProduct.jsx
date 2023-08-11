import { FormControl, Button, Typography, TextField } from "@mui/material";

export const FormQuantityProduct = ({ onSubmit, onClose, product }) => {
  const handelSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const reserved = form.elements.reserved.value;

    onSubmit(reserved, product);
    onClose();
    form.reset();
  };
  return (
    <FormControl
      id="quantityProduct"
      variant="standard"
      component="form"
      onSubmit={handelSubmit}
      sx={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography variant="h6" component="p" align="center" sx={{ mb: 2 }}>
        Введіть кількість деталей
      </Typography>
      <TextField
        autoFocus
        type="number"
        name="reserved"
        variant="outlined"
        label="Кількість деталей, шт."
        inputProps={{ min: "1" }}
        defaultValue={"1"}
      />
      <Button type="submit" variant="contained" size="large">
        OK
      </Button>
    </FormControl>
  );
};
