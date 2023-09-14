export function getMetalConsumption(material, quantity) {
  if (quantity !== 0) {
    if (material.type === "sheet") {
      return (material.weight / quantity).toFixed(3);
    } else if (material.type === "rod") {
      return ((material.weight * 6) / quantity).toFixed(3);
    }
  } else {
    return Infinity;
  }
}
