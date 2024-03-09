import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api.ts";

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
  async (registerData: RegisterData) => {
    const { data } = await api.post("auth/register", registerData);

    return { data };
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (loginData: LoginData) => {
    const { data } = await api.post("auth/login", loginData);

    return data;
  },
);

export const fetchUser = createAsyncThunk("auth/user", async () => {
  const { data } = await api.get("user");

  return data;
});
