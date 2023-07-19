export const selectUser = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => state.auth.user;

export const selectRefreshing = (state) => state.auth.isRefreshing;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;
