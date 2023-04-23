import { createSlice } from "@reduxjs/toolkit";

export const stateUserSlices = createSlice({
  name: "stateUser",
  initialState: {
    stateUser: "",
  },
  reducers: {
    setStateUser: (state, action) => {
      state.stateUser = action.payload;
    },
  },
});

export const { setStateUser } = stateUserSlices.actions;
export default stateUserSlices.reducer;
