// функція отримання норми витрати маталу

import { MATERIALS } from "../data/materials";

const materials = MATERIALS;

export function getMetalConsumption(quantity, sheet, thickness) {
  // потрібна перевірка на кількість деталей щоб була

  const isMaterial = materials.find(
    (material) =>
      material.sizeSheet === sheet && material.thicknessSheet === thickness
  );

  return (isMaterial.weightSheet / quantity).toFixed(3);
  // потрібна буде перевірка щоб математичний вираз виконувася
}
