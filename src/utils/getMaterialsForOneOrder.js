export function getMaterialsForOneOrder(products) {
  // знаходимо унікальні значення  сортаменту в замовленні
  const getAssortmentUnique = (products) => {
    const assortmentUnique = products
      .map((product) => product.material)
      .reduce((acc, product) => {
        const isUnique = acc.some(
          (element) =>
            element.thickness === product.thickness &&
            element.sheet === product.sheet
        );

        if (!isUnique) {
          acc.push({ ...product });
        }
        return acc;
      }, []);
    return assortmentUnique;
  };

  //  для кожного унікального значення матеріалу додаємо норму витрати
  //   металу при збігу зі знаеннями розкою листа та товщини.
  const materialsForOneOrder = getAssortmentUnique(products).map((material) => {
    const amountOfMaterial = products.reduce((acc, product) => {
      if (
        material.thickness === product.material.thickness &&
        material.sheet === product.material.sheet
      ) {
        acc = acc + (1 / product.quantity) * product.reserved;
      }
      return acc;
    }, 0);
    return { ...material, amount: amountOfMaterial.toFixed(1) };
  });

  return materialsForOneOrder;
}
