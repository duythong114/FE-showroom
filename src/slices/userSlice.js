import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false,
}

export const fetchAllUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async () => {
        const response = axios.get('http://localhost:8080/api/user/get-all-users')
        return response.data
    },
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAllUsers.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.listUsers = action.payload
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
        })
    },
})

// Action creators are generated for each case reducer function


export default userSlice.reducer