import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Домашня сторінка</NavLink>
        </li>
        <li>
          <NavLink to="/products">Список продукції</NavLink>
        </li>
      </ul>
    </nav>
  );
};
