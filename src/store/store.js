import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
import carReducer from '../slices/carSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        car: carReducer,
    },
})