export function getMaterialsForOneOrder(products) {
  // знаходимо унікальні значення  сортаменту в замовленні
  const getAssortmentUnique = (products) => {
    const assortmentUnique = products
      .map((product) => product.material)
      .reduce((acc, material) => {
        const isUnique = acc.some((element) => element._id === material._id);

        if (!isUnique) {
          acc.push({ ...material });
        }
        return acc;
      }, []);
    return assortmentUnique;
  };
  const uniqueMaterials = getAssortmentUnique(products);

  //  для кожного унікального значення матеріалу додаємо норму витрати металу при збігу id.
  const materialsForOneOrder = uniqueMaterials.map((material) => {
    const amountOfMaterial = products.reduce((acc, product) => {
      if (material._id === product.material._id) {
        acc = acc + (1 / product.quantity) * product.reserved;
      }
      return acc;
    }, 0);
    return { ...material, amount: amountOfMaterial.toFixed(3) };
  });

  return materialsForOneOrder;
}
