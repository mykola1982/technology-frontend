import { useState } from "react";

import { getMaterials } from "../../fakeAPI";

const Materials = () => {
  const [materials, setMaterials] = useState(getMaterials());
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>№ п.п </th>
            <th>Розмір та тип листа</th>
            <th>Товщина листа, мм.</th>
            <th>Вага листа, мм.</th>
          </tr>
        </thead>

        <tbody>
          {materials.map(
            ({ id, sizeSheet, thicknessSheet, weightSheet }, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td> {sizeSheet}</td>
                <td>{thicknessSheet}</td>
                <td>{weightSheet}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Materials;
