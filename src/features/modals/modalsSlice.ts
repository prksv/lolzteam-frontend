import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TModal = {
  isOpen: boolean;
};

export interface ModalsState {
  [id: string]: TModal;
}

const initialState: ModalsState = {
  register: {
    isOpen: false,
  },
};

export const modalsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state[action.payload].isOpen = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state[action.payload].isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;