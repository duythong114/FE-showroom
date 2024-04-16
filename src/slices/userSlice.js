import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    getAllUsersService,
    registerNewUserService,
    loginUserService,
    getUserByIdService,
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

export const registerNewUser = createAsyncThunk(
    'user/registerNewUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await registerNewUserService(userData)
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

export const getUserById = createAsyncThunk(
    'user/getUserById',
    async (userId) => {
        try {
            const response = await getUserByIdService(userId)
            return response
        } catch (error) {
            return error;
        }
    },
)

const initialState = {
    // common state
    isError: null,

    // login state
    isAuthenticated: false,
    isLogging: false,
    user: null,

    // register state
    isRegistering: false,

    // fetch all users state
    isLoadingAllUsers: false,
    listUsers: [],
    totalPages: 0,

    // fetch user by id state
    isLoadingUserById: false,
    detailUser: null,
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
                state.isAuthenticated = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLogging = false
                state.isAuthenticated = true
                state.user = action.payload?.data?.user
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLogging = false
                state.isAuthenticated = false
                state.isError = action.payload.message
            })

        // create new user
        builder
            .addCase(registerNewUser.pending, (state, action) => {
                state.isRegistering = true
            })
            .addCase(registerNewUser.fulfilled, (state, action) => {
                state.isRegistering = false
            })
            .addCase(registerNewUser.rejected, (state, action) => {
                state.isRegistering = false
                state.isError = action.payload.message
            })

        // fetch all user
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.isLoadingAllUsers = true
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.isLoadingAllUsers = false
                state.listUsers = action.payload?.data?.users
                state.totalPages = action.payload?.data?.totalPages
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoadingAllUsers = false
                state.isError = action.payload.message
            })

        // fetch user by id
        builder
            .addCase(getUserById.pending, (state, action) => {
                state.isLoadingUserById = true
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.isLoadingUserById = false
                state.detailUser = action.payload?.data
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.isLoadingUserById = false
                state.isError = action.payload.message
            })
    },
})

export default userSlice.reducer