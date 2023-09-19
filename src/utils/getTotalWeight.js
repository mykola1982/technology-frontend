export const getTotalWeight = (materials) => {
  const totalWeigth = materials.reduce((acc, material) => {
    const { amount, weight } = material;
    acc = acc + amount * weight;
    return acc;
  }, 0);

  return totalWeigth;
};
