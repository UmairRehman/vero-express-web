import { createSlice } from "@reduxjs/toolkit";
import { resetStores } from "../stores";
import { resetLoader } from "../loader";

const initialState = {
  login: false,
  token: "",
  user: null,
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
      state.user = null;
      state.permissions = [];
      state.masterUser = false;
    },
    updateUserAddresses: (state, action) => {
      if (state.user) {
        state.user.addresses = action.payload;
      }
    },
  },
});

export const { Authenticate, Logout, updateUserAddresses } =
  userSlice.actions;
export const getUserDetails = (state) => state.user;
export const getUserPermissions = (state) => state.user;

export default userSlice.reducer;
