import { createSlice } from "@reduxjs/toolkit";
import * as LocalStorage from "../../utils/localStorage.util";

const userData = LocalStorage.getUserData();
const userImg = LocalStorage.getUserImg();

const initialState = {
  user: userData ? userData : null,
  userImg: userImg
    ? userImg
    : "https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserImg: (state, action) => {
      state.userImg = action.payload;
    },
  },
});

export const { setUser, removeUser, setUserImg } = authSlice.actions;

export default authSlice.reducer;
