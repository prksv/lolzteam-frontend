import { configureStore } from '@reduxjs/toolkit'
import modalsReducer from '../features/modals/modalsSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        modals: modalsReducer,
        auth: authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch