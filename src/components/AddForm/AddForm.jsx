import { nanoid } from "nanoid";
import { useState } from "react";

import { getMaterials } from "../../data/fakeAPI";

import * as API from "../../services/products-API";

const Workshop = {
  CNC: "Дільниця з ЧПУ",
  PRESSING: "Штамповочна дільниця",
};

export const AddForm = ({ onSubmit, onClose }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const quantityInputId = nanoid();
  const weightInputId = nanoid();

  //  визначаємо унікальни розміри листів та товщини листів
  // треба прописати через функцію яка буде фільтрувати унікальні елементи в масивіЙЙ

  const materials = getMaterials();

  const valuesSheet = materials
    .map(({ sizeSheet }) => sizeSheet)
    .filter((sizeSheet, index, array) => array.indexOf(sizeSheet) === index);

  const valuesThikness = materials
    .map(({ thicknessSheet }) => thicknessSheet)
    .filter(
      (thicknessSheet, index, array) => array.indexOf(thicknessSheet) === index
    );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const weight = form.elements.weight.value;
    const quantity = form.elements.quantity.value;
    const workshop = form.elements.workshop.value;
    const thickness = form.elements.thickness.value;
    const sheet = form.elements.sheet.value;

    onSubmit({
      name,
      number,
      weight,
      quantity,
      workshop,
      thickness,
      sheet,
    });

    onClose();
    form.reset();
  };

  return (
    <form style={{ display: " inline-grid" }} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Найменування</label>
      <input type="text" name="name" id={nameInputId} />
      <label htmlFor={numberInputId}>Децимальний номер</label>
      <input type="text" name="number" id={numberInputId} />
      <label htmlFor={weightInputId}>Вага деталі, кг.</label>

      <input
        type="number"
        name="weight"
        min="0"
        step="0.001"
        id={weightInputId}
      />

      <label htmlFor={quantityInputId}>Кількість деталей з листа, шт.</label>
      <input type="number" name="quantity" min="1" id={quantityInputId} />
      <p>Виберіть виробничу дільницю</p>
      <label>
        ЧПУ
        <input
          type="radio"
          checked
          name="workshop"
          value={Workshop.CNC}
          //   onChange={ }
        />
      </label>
      <label>
        Штамповка
        <input
          type="radio"
          //   checked={department === Department.PRESSING}
          name="workshop"
          value={Workshop.PRESSING}
          //   onChange={}
        />
      </label>
      <label>
        Товщина матеріалу:
        <select name="thickness">
          {valuesThikness.map((value) => (
            <option key={nanoid()} value={value}>
              {value} мм.
            </option>
          ))}
        </select>
      </label>
      <label>
        Розмір листа матеріалу:
        <select name="sheet">
          {valuesSheet.map((material) => (
            <option key={nanoid()} value={material}>
              {material}
            </option>
          ))}
        </select>
      </label>
      {/* {розглянути можливість формування опцій з файлу даних} */}
      {/* <label>
        Всі дані введені вірно
        <input
          type="checkbox"
          checked={agreed}
          onChange={handleChangeChecked}
        />
      </label> */}
      {/* групування полів */}
      <button type="submit">Додати деталь до списку</button>
    </form>
  );
};
