// функція отримання норми витрати маталу

export function getMetalConsumption(quantity, thickness, material) {
  // потрібна буде перевірка щоб математичний вираз виконувася

  if (
    thickness === "0.8" &&
    (material === "2500x1250 Оц." ||
      material === "2500x1250 Ст3." ||
      material === "2500x1250 AISI 304" ||
      material === "2500x1250 AISI 430")
  ) {
    return (20.8 / quantity).toFixed(3);
  }
  if (
    thickness === "1.0" &&
    (material === "2500x1250 Оц." ||
      material === "2500x1250 Ст3." ||
      material === "2500x1250 AISI 304" ||
      material === "2500x1250 AISI 430")
  ) {
    return (26 / quantity).toFixed(3);
  }
  if (
    thickness === "1.2" &&
    (material === "2500x1250 Оц." ||
      material === "2500x1250 Ст3." ||
      material === "2500x1250 AISI 304" ||
      material === "2500x1250 AISI 430")
  ) {
    return (31.2 / quantity).toFixed(3);
  }
  if (
    thickness === "1.5" &&
    (material === "2500x1250 Оц." ||
      material === "2500x1250 Ст3." ||
      material === "2500x1250 AISI 304" ||
      material === "2500x1250 AISI 430")
  ) {
    return (39 / quantity).toFixed(3);
  }
  if (
    thickness === "2.0" &&
    (material === "2500x1250 Оц." ||
      material === "2500x1250 Ст3." ||
      material === "2500x1250 AISI 304" ||
      material === "2500x1250 AISI 430")
  ) {
    return (52 / quantity).toFixed(3);
  }
  if (
    thickness === "2.5" &&
    (material === "2500x1250 Оц." ||
      material === "2500x1250 Ст3." ||
      material === "2500x1250 AISI 304" ||
      material === "2500x1250 AISI 430")
  ) {
    return (65 / quantity).toFixed(3);
  }
  if (
    thickness === "3.0" &&
    (material === "2500x1250 Оц." ||
      material === "2500x1250 Ст3." ||
      material === "2500x1250 AISI 304" ||
      material === "2500x1250 AISI 430")
  ) {
    (79 / quantity).toFixed(3);
  }
}

// треба попрацювати над логікою отримання та обробки даних
// перебрати масив обєктів і вивести дані перевіривши при переборі товщину та розкрій !!!!!
