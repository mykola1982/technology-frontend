// функція отримання норми витрати маталу

import { MATERIALS } from "../data/materials";

const materials = MATERIALS;

export function getMetalConsumption(quantity, sheet, thickness) {
  // потрібна перевірка на кількість деталей щоб була

  const isMaterial = materials.find(
    (material) =>
      material.sizeSheet === sheet && material.thicknessSheet === thickness
  );

  return isMaterial.weightSheet / quantity;
  // потрібна буде перевірка щоб математичний вираз виконувася
}

// треба попрацювати над логікою отримання та обробки даних
// перебрати масив обєктів і вивести дані перевіривши при переборі товщину та розкрій !!!!!
