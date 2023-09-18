export function normalizeProductsForOrder(products) {
  const normalizedProducts = products.map(({ name, number, reserved }) => {
    return { name, number, reserved };
  });
  return normalizedProducts;
}
