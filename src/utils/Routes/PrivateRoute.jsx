// import { Navigate } from "react-router-dom";
// import { useAuth } from "hooks/useAuth";

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const { token } = useAuth();

//   return !token ? <Navigate to={redirectTo} /> : Component;
// };

import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import jwt_decode from "jwt-decode";

import { clearToken } from "redux/auth/authOperation";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { token } = useAuth();

  const dispatch = useDispatch();

  if (!token) {
    return <Navigate to={redirectTo} />;
  }

  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      dispatch(clearToken());
      return <Navigate to={redirectTo} />;
    }
    return Component;
  } catch (error) {
    dispatch(clearToken());
    return <Navigate to={redirectTo} />;
  }
};
