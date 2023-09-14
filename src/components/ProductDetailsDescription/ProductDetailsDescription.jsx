import { Box, Typography } from "@mui/material";

import { getMetalConsumption } from "utils/getMetalConsumption";

export const ProductDetailsDescription = ({ detailsProduct }) => {
  const { name, number, material, weight, quantity, workshop } = detailsProduct;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
      <Typography
        variant="h5"
        component="p"
        align={"center"}
        sx={{ fontWeight: 700 }}
      >
        {name} {number}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Найменування: <Typography component="span">{name}</Typography>
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Децимальний номер: <Typography component="span">{number}</Typography>
      </Typography>

      {material?.type === "sheet" && (
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Матеріал:{" "}
          <Typography component="span">
            Лист {material.sheetParameters.thickness}х
            {material.sheetParameters.length}x{material.sheetParameters.width}{" "}
            {material.brand}
            <Typography component="span" sx={{ fontWeight: 700 }}>
              {" "}
              ({material.weight} кг.)
            </Typography>
          </Typography>
        </Typography>
      )}

      {material?.type === "rod" && (
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Матеріал:{" "}
          <Typography component="span">
            Круг {material.rodParameters.diameter} {material.brand}
            <Typography component="span" sx={{ fontWeight: 700 }}>
              {" "}
              ({material.weight} кг.)
            </Typography>
          </Typography>
        </Typography>
      )}

      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Вага деталі: <Typography component="span">{weight} кг.</Typography>
      </Typography>

      {material?.type === "sheet" && (
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Кількість деталей з листа:{" "}
          <Typography component="span">
            {quantity} шт.(
            {material.sheetParameters.length}x{material.sheetParameters.width})
          </Typography>
        </Typography>
      )}

      {material?.type === "rod" && (
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Кількість деталей з 6 м.п.:{" "}
          <Typography component="span">{quantity} шт.</Typography>
        </Typography>
      )}
      {material && (
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Норма витрати:{" "}
          <Typography component="span">
            {getMetalConsumption(material, quantity)} кг.
          </Typography>
        </Typography>
      )}

      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Дільниця: <Typography component="span">{workshop}</Typography>
      </Typography>
    </Box>
  );
};
