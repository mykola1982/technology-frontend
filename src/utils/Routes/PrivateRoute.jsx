import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { token } = useAuth();

  return !token ? <Navigate to={redirectTo} /> : Component;
};
