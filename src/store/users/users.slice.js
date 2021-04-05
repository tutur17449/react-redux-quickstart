import { createSlice } from "@reduxjs/toolkit";
import httpClient from "../../lib/axios";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addInitialUsers: (state, { payload }) => {
      state.users = payload;
    },
    setIsLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setLoadingComplete: (state) => {
      state.isLoading = false;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  addInitialUsers,
  setIsLoading,
  setLoadingComplete,
  setError,
} = usersSlice.actions;

export default usersSlice.reducer;

// ****************************************************
// @desc    Thunks
// ****************************************************
export const fetchInitialUsers = () => async (dispatch) => {
  dispatch(setIsLoading());
  try {
    const { data } = await httpClient.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(addInitialUsers(data));
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoadingComplete());
  }
};
