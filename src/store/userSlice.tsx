import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    email: "",
    avatar: "",
    type: "",
    cpf: "",
    password: "",
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return {
        ...state,
        isLogged: true,
        name: payload.name,
        email: payload.email,
        id: payload.id,
        avatar: payload.avatar,
        type: payload.type,
        cpf: payload.cpf,
        password: payload.password,
      };
    },
    logout(state) {
      return {
        ...state,
        isLogged: false,
        name: "",
        email: "",
        id: "",
        cpf: "",
        password: "",
        avatar: "",
        type: "",
      };
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const selectUser = (state: any) => state.user;

export default slice.reducer;
