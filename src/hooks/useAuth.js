import { useSelector } from "react-redux";

import {
  selectUser,
  selectIsLoggedIn,
  selectRefreshing,
  selectIsLoading,
  selectError,
} from "redux/auth/authSelectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isloggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { user, isloggedIn, isRefreshing, isLoading, error };
};
