import { nanoid } from "nanoid";
import { useState } from "react";

import { MATERIALS } from "../../data/materials";
import { VALUES_THICKNESS } from "../../data/materials";

const Department = {
  CNC: "Дільниця з ЧПУ",
  PRESSING: "Штамповочна дільниця",
};

const materials = MATERIALS;
const valuesThikness = VALUES_THICKNESS;

export const AddForm = ({ onSubmit }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const quantityInputId = nanoid();

  // стейт що контролює вибір виробничої дільниці цеху
  //   const [department, setDepartment] = useState("");

  // стейт що контролює кнопку сабміту форми через чекбокс
  const [agreed, setAgreed] = useState(false);

  const handleChangeChecked = (evt) => {
    setAgreed(evt.target.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const quantity = form.elements.quantity.value;
    const department = form.elements.department.value;
    const thickness = form.elements.thickness.value;
    const material = form.elements.material.value;

    onSubmit({ name, number, quantity, department, thickness, material });

    //   почитати про форм дата FormData

    form.reset();
  };

  return (
    <form style={{ display: " inline-grid" }} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Найменування</label>
      <input type="text" name="name" id={nameInputId} />
      <label htmlFor={numberInputId}>Децимальний номер</label>
      <input type="text" name="number" id={numberInputId} />
      <label htmlFor={quantityInputId}>Кількість деталей з листа</label>
      <input type="number" name="quantity" id={quantityInputId} />

      <p>Виберіть виробничу дільницю</p>
      <label>
        ЧПУ
        <input
          type="radio"
          checked
          name="department"
          value={Department.CNC}
          //   onChange={ }
        />
      </label>

      <label>
        Штамповка
        <input
          type="radio"
          //   checked={department === Department.PRESSING}
          name="department"
          value={Department.PRESSING}
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
        <select name="material">
          {materials.map((material) => (
            <option key={nanoid()} value={material}>
              {material}
            </option>
          ))}
        </select>
      </label>

      {/* {розглянути можливість формування опцій з файлу даних} */}

      <label>
        Всі дані введені вірно
        <input
          type="checkbox"
          checked={agreed}
          onChange={handleChangeChecked}
        />
      </label>
      {/* групування полів */}
      <button type="submit" disabled={!agreed}>
        Додати деталь до списку
      </button>
    </form>
  );
};
