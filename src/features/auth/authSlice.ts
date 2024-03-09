import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, loginUser } from "./authActions.ts";
import { useToast } from "@chakra-ui/react";

export interface ModalsState {
  user: TUser | null;
  isLoading: boolean;
}

export type TUser = {
  id: number;
  email: string;
  username: string;
  is_admin: boolean;
};

export type TUserPublic = {
  id: number;
  username: string;
};

const initialState: ModalsState = {
  user: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (_state, { payload }) => {
      localStorage.setItem("token", payload.data.token);
    });

    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUser.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.user = payload.data;
      state.isLoading = false;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
