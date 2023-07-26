import { useSelector } from "react-redux";

import {
  selectUser,
  selectToken,
  selectRefreshing,
  selectIsLoading,
  selectError,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { user, token, isRefreshing, isLoading, error };
};
