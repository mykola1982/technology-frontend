const products = [
  {
    id: "1",
    name: "Підсилювач",
    number: "600.000.054.50-01",
    quantity: 0,
    thickness: "0.8",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "2",
    name: "Кронштейн",
    number: "600.000.054.51",
    quantity: 100,
    thickness: "1.0",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "3",
    name: "Кронштейн термостата",
    number: "600.000.054.52",
    quantity: 100,
    thickness: "1.2",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "4",
    name: "Фіксатор торсіона",
    number: "600.000.054.53",
    quantity: 100,
    thickness: "1.5",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "5",
    name: "Кронштейн",
    number: "600.000.054.54",
    quantity: 100,
    thickness: "2.0",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "6",
    name: "Кутник",
    number: "600.000.054.55",
    quantity: 100,
    thickness: "2.5",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "7",
    name: "Направляюча платформи",
    number: "600.000.054.56",
    quantity: 100,
    thickness: "2.5",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "8",
    name: "Направляюча платформи",
    number: "600.000.054.56-01",
    quantity: 154,
    thickness: "3.0",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "9",
    name: "Направляюча платформи",
    number: "600.000.054.56-02",
    quantity: 16,
    thickness: "3.0",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "10",
    name: "Направляюча платформи",
    number: "600.000.054.56-03",
    quantity: 154,
  },
  {
    id: "11",
    name: "Пластина агрегата",
    number: "600.000.054.60",
    quantity: 1169,
    thickness: "3.0",
    sheet: "2500x1250 Оц.",
  },
  {
    id: "12",
    name: "Облицювання нижнє",
    number: "300.000.054.61",
    quantity: 100,
  },
  {
    id: "13",
    name: "Основа лайт-бокса",
    number: "321.000.054.62",
    quantity: 32,
  },
  {
    id: "14",
    name: "Підсилювач верхнбої вставки",
    number: "600.000.054.63",
    quantity: 166,
  },
  { id: "15", name: "Заглушка", number: "000.000.054.64", quantity: 1000 },
  { id: "16", name: "Облицювання", number: "600.000.054.65", quantity: 14 },
  { id: "17", name: "Підсилювач", number: "600.000.054.66", quantity: 154 },
  { id: "18", name: "Підсилювач", number: "600.000.054.67", quantity: 15 },
  { id: "19", name: "Стійка полиці", number: "600.000.054.58", quantity: 198 },
  {
    id: "20",
    name: "Кронштейн полиці",
    number: "600.000.054.59",
    quantity: 154,
  },
];

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
