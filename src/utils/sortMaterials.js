export function sortMaterials(arrayObj) {
  const sortedArrayObj = [...arrayObj].sort((firstMaterial, secondMaterial) => {
    const typeComparison = secondMaterial.type.localeCompare(
      firstMaterial.type
    );
    if (typeComparison !== 0) {
      return typeComparison;
    }

    if (firstMaterial.type === "sheet" && secondMaterial.type === "sheet") {
      // Сортування за thickness, потім за length, потім за width
      const thicknessComparison =
        firstMaterial.sheetParameters.thickness -
        secondMaterial.sheetParameters.thickness;
      if (thicknessComparison !== 0) {
        return thicknessComparison;
      }

      const lengthComparison =
        firstMaterial.sheetParameters.length -
        secondMaterial.sheetParameters.length;
      if (lengthComparison !== 0) {
        return lengthComparison;
      }

      const widthComparison =
        firstMaterial.sheetParameters.width -
        secondMaterial.sheetParameters.width;
      if (widthComparison !== 0) {
        return widthComparison;
      }
    }

    if (firstMaterial.type === "rod" && secondMaterial.type === "rod") {
      // Сортування за diameter
      const diameterComparison =
        firstMaterial.rodParameters.diameter -
        secondMaterial.rodParameters.diameter;
      if (diameterComparison !== 0) {
        return diameterComparison;
      }
    }

    // Сортування за weight
    return firstMaterial.weight - secondMaterial.weight;
  });

  return sortedArrayObj;
}
