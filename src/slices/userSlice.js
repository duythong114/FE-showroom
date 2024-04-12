import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    getAllUsersService,
    createNewUserService,
    loginUserService,
} from '../services'

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await loginUserService(userData)
            return response
        } catch (error) {
            return rejectWithValue(error);
        }
    },
)

export const createNewUser = createAsyncThunk(
    'user/createNewUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await createNewUserService(userData)
            return response
        } catch (error) {
            return rejectWithValue(error);
        }
    },
)

export const fetchAllUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async (pagination) => {
        try {
            const response = await getAllUsersService(pagination)
            return response
        } catch (error) {
            return error;
        }
    },
)

const initialState = {
    isLoggedIn: false,
    isLogging: false,
    isRegistering: false,
    isLoading: false,
    listUsers: [],
    isError: null,
    user: null,
    totalPages: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // login user
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.isLogging = true
                state.isLoggedIn = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLogging = false
                state.isLoggedIn = true
                state.user = action.payload.data
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLogging = false
                state.isLoggedIn = false
                state.isError = action.payload.message
            })

        // create new user
        builder
            .addCase(createNewUser.pending, (state, action) => {
                state.isRegistering = true
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.isRegistering = false
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.isRegistering = false
                state.isError = action.payload.message
            })

        // fetch all user
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload.data.users
                state.totalPages = action.payload.data.totalPages
                state.isLoading = false
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload.message
            })
    },
})

export default userSlice.reducer