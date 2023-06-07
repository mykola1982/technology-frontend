import { Box, Typography } from "@mui/material";

import { getMetalConsumption } from "../../utils/getMetalConsumption";

export const ProductDetailsDescription = ({ detailsProduct }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
      <Typography
        variant="h5"
        component="p"
        align={"center"}
        sx={{ fontWeight: 700 }}
      >
        {detailsProduct.name} {detailsProduct.number}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Найменування:{" "}
        <Typography component="span">{detailsProduct.name}</Typography>
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Децимальний номер:{" "}
        <Typography component="span">{detailsProduct.number}</Typography>
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Матеріал:{" "}
        <Typography component="span">
          {detailsProduct.material.thickness}х{detailsProduct.material.sheet}
        </Typography>
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Вага деталі:{" "}
        <Typography component="span">{detailsProduct.weight} кг.</Typography>
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Кількість деталей листа:{" "}
        <Typography component="span">
          {detailsProduct.quantity} шт.(
          {detailsProduct.material.sheet})
        </Typography>
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Норма витрати:{" "}
        <Typography component="span">
          {getMetalConsumption(
            detailsProduct.quantity,
            detailsProduct.material.sheet,
            detailsProduct.material.thickness
          )}{" "}
          кг.
        </Typography>
      </Typography>

      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Дільниця:{" "}
        <Typography component="span">{detailsProduct.workshop}</Typography>
      </Typography>
    </Box>
  );
};
