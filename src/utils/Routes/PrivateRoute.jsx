// import { Navigate } from "react-router-dom";
// import { useAuth } from "hooks/useAuth";

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const { token } = useAuth();

//   return !token ? <Navigate to={redirectTo} /> : Component;
// };

import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import jwt_decode from "jwt-decode";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={redirectTo} />;
  }

  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      return <Navigate to={redirectTo} />;
    }
    return Component;
  } catch (error) {
    return <Navigate to={redirectTo} />;
  }
};
