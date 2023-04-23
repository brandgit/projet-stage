import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../Feature/users.slice";
import stateUserReducer from "../Feature/stateUser.slice";

export default configureStore({
  reducer: {
    users: usersReducer,
    stateUser: stateUserReducer,
    // users: null,
  },
});
