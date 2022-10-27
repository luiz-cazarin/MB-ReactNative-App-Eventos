import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../utils/users";

export const slice = createSlice({
  name: "users",
  initialState: {
    arr: USERS
  },
  reducers: {
    registerUser(state, { payload }) {
      payload.id = Math.floor(Date.now() * Math.random()).toString(36);
      return {
        ...state,
        arr: state.arr.concat(payload),
      };
    },
    deleteUser(state, { payload }) {
      return {
        arr: state.arr.filter((item: any) => item.id !== payload),
      };
    },
  },
});

export const { registerUser, deleteUser } = slice.actions;

export const selectUsers = (state: any) => state.users;

export default slice.reducer;
