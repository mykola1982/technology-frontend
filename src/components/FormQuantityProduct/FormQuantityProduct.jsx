import { Button, Typography, TextField } from "@mui/material";

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
    <form onSubmit={handelSubmit}>
      <Typography variant="h6" component="p" align="center" sx={{ mb: 2 }}>
        Введіть кількість деталей
      </Typography>
      <TextField type="number" name="reserved" min="1" defaultValue={"1"} />
      <Button type="submit" variant="contained" size="small">
        OK
      </Button>
    </form>
  );
};
