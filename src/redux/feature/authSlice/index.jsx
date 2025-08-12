import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  token: "",
  user: {},
  permissions: [],
  masterUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    Authenticate: (state, payload) => {
      state.login = true;
      state.user = payload.payload;
    },
    Permission: (state, payload) => {
      state.permissions = payload.payload;
    },
    setMasterUser: (state, payload) => {
      state.masterUser = payload.payload;
    },
    // SelfUser: (state, payload) => {
    //   state.login = true;
    //   state.selfUser = payload.payload;
    // },
    Logout: (state) => {
      state.login = false;
      state.token = "";
      state.user = {};
    },
  },
});

export const { Authenticate, Logout } =
  userSlice.actions;
export const getUserDetails = (state) => state.user;
export const getUserPermissions = (state) => state.user;

export default userSlice.reducer;
