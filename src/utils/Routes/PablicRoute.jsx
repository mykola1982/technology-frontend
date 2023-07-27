import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PablicRoute = ({ component: Component, redirectTo = "/" }) => {
  const { token } = useAuth();

  return token ? <Navigate to={redirectTo} /> : Component;
};
