export const getUsers = (state) => {
  return state.users.users;
};

export const getIsLoading = (state) => {
  return state.users.isLoading;
};

export const getError = (state) => {
  return state.users.error;
};
