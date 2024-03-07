import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface ModalsState {
  isAuth: boolean;
  user: string|null;
}

const initialState: ModalsState = {
  isAuth: false,
  user: null,
};


export const registerUser = createAsyncThunk("auth/register", async (registerData: any) => {
  const response = await axios.post("http://localhost:8000/api/auth/register", registerData);

  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
});

export const { } = authSlice.actions;

export default authSlice.reducer;
