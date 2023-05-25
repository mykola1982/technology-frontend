import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Домашня сторінка</NavLink>
        </li>
        <li>
          <NavLink to="/products">Продукція</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Замовлення</NavLink>
        </li>
        <li>
          <NavLink to="/materials">Матеріали</NavLink>
        </li>
      </ul>
    </nav>
  );
};
