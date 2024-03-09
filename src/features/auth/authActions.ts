import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api.ts";
import { AxiosError } from "axios";

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async (registerData: RegisterData, thunkAPI) => {
    try {
      const { data } = await api.post("auth/register", registerData);

      return { data };
    } catch (err) {
      if (err instanceof AxiosError) {
        return thunkAPI.rejectWithValue(err.response?.data);
      }
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (loginData: LoginData, thunkAPI) => {
    try {
      const { data } = await api.post("auth/login", loginData);
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return thunkAPI.rejectWithValue(err.response?.data);
      }
    }
  },
);

export const fetchUser = createAsyncThunk("auth/user", async () => {
  const { data } = await api.get("user");

  return data;
});
