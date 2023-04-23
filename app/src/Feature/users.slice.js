import { createSlice } from "@reduxjs/toolkit";

export const usersSlices = createSlice({
  name: "users",
  initialState: {
    users: "",
  },
  reducers: {
    setUsersData: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersData } = usersSlices.actions;
export default usersSlices.reducer;
