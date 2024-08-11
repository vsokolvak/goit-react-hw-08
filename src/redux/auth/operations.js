import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { contacts } from "../contacts/operations";

const auth = axios.create({
  baseURL: "https://connections-api.goit.global/users",
});

const setAuthorizationToken = (token) => {
  auth.defaults.headers.common.Authorization = `Bearer ${token}`;
  contacts.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkApi) => {
    try {
      const response = await auth.post("/signup", newUser);
      setAuthorizationToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const response = await auth.post("/login", user);
    setAuthorizationToken(response.data.token);
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = await auth.post("/logout");
    setAuthorizationToken('');
    return response.data;
  } catch (e) {
    setAuthorizationToken("");
    return thunkApi.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      setAuthorizationToken(thunkApi.getState().auth.token);
      const response = await auth.get("/current");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
