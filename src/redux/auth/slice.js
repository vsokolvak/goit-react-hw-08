import { createSlice } from "@reduxjs/toolkit";
import { login, logOut, refreshUser, register } from "./operations";

const authState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, actions) => {
        state.isRefreshing = false;
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, actions) => {
        state.isRefreshing = false;
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = authState.user;
        state.isLoggedIn = authState.isLoggedIn;
        state.isRefreshing = authState.isRefreshing;
        state.token = authState.token;
      })
      .addCase(logOut.rejected, (state) => {
        state.user = authState.user;
        state.isLoggedIn = authState.isLoggedIn;
        state.isRefreshing = authState.isRefreshing;
        state.token = authState.token;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, actions) => {
        state.isRefreshing = false;
        state.user.name = actions.payload.name;
        state.user.email = actions.payload.email;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default slice.reducer;
