// функція отримання норми витрати маталу

export function getMetalConsumption(quantity, thickness, sheet) {
  // потрібна буде перевірка щоб математичний вираз виконувася

  if (
    thickness === "0.8" &&
    (sheet === "2500x1250 Оц." ||
      sheet === "2500x1250 Ст3." ||
      sheet === "2500x1250 AISI 304" ||
      sheet === "2500x1250 AISI 430")
  ) {
    return (20.8 / quantity).toFixed(3);
  }
  if (
    thickness === "1.0" &&
    (sheet === "2500x1250 Оц." ||
      sheet === "2500x1250 Ст3." ||
      sheet === "2500x1250 AISI 304" ||
      sheet === "2500x1250 AISI 430")
  ) {
    return (26 / quantity).toFixed(3);
  }
  if (
    thickness === "1.2" &&
    (sheet === "2500x1250 Оц." ||
      sheet === "2500x1250 Ст3." ||
      sheet === "2500x1250 AISI 304" ||
      sheet === "2500x1250 AISI 430")
  ) {
    return (31.2 / quantity).toFixed(3);
  }
  if (
    thickness === "1.5" &&
    (sheet === "2500x1250 Оц." ||
      sheet === "2500x1250 Ст3." ||
      sheet === "2500x1250 AISI 304" ||
      sheet === "2500x1250 AISI 430")
  ) {
    return (39 / quantity).toFixed(3);
  }
  if (
    thickness === "2.0" &&
    (sheet === "2500x1250 Оц." ||
      sheet === "2500x1250 Ст3." ||
      sheet === "2500x1250 AISI 304" ||
      sheet === "2500x1250 AISI 430")
  ) {
    return (52 / quantity).toFixed(3);
  }
  if (
    thickness === "2.5" &&
    (sheet === "2500x1250 Оц." ||
      sheet === "2500x1250 Ст3." ||
      sheet === "2500x1250 AISI 304" ||
      sheet === "2500x1250 AISI 430")
  ) {
    return (65 / quantity).toFixed(3);
  }
  if (
    thickness === "3.0" &&
    (sheet === "2500x1250 Оц." ||
      sheet === "2500x1250 Ст3." ||
      sheet === "2500x1250 AISI 304" ||
      sheet === "2500x1250 AISI 430")
  ) {
    (79 / quantity).toFixed(3);
  }
}

// треба попрацювати над логікою отримання та обробки даних
// перебрати масив обєктів і вивести дані перевіривши при переборі товщину та розкрій !!!!!
