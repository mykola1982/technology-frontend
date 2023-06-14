import { getMaterials } from "../data/fakeAPI";

const materials = getMaterials();

export function getMetalConsumption(quantity, sheet, thickness) {
  const isMaterial = materials.find(
    (material) =>
      material.sizeSheet === sheet && material.thicknessSheet === thickness
  );

  if (quantity !== 0) {
    return (isMaterial.weightSheet / quantity).toFixed(3);
  } else {
    return Infinity;
  }
}
