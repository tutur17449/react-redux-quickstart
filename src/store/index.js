import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import users from "./users/users.slice";

const reducer = combineReducers({
  users,
});

const store = configureStore({ reducer, devTools: true, middleware: [thunk] });

export default store;
