export function normalizeMaterialsForOrder(materials) {
  const normalizedMaterials = materials.map((material) => {
    const { brand, type, weight, amount, sheetParameters, rodParameters } =
      material;
    let normalizedMaterial = null;
    if (type === "sheet") {
      normalizedMaterial = {
        brand,
        type,
        sheetParameters,
        weight,
        amount,
      };
    }

    if (type === "rod") {
      normalizedMaterial = {
        brand,
        type,
        rodParameters,
        weight,
        amount,
      };
    }
    return normalizedMaterial;
  });
  return normalizedMaterials;
}
