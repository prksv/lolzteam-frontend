import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "../features/modal/modalSlice";
import authReducer from "../features/auth/authSlice";
import articleReducer from "../features/article/articleSlice";

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    auth: authReducer,
    articles: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
