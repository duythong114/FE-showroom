import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    getAllUsersService,
    createNewUserService,
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
    isLoggedIn: false,
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
                state.isLoadingAllUsers = true
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload.data.users
                state.totalPages = action.payload.data.totalPages
                state.isLoadingAllUsers = false
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
                state.detailUser = action.payload.data
                state.isLoadingUserById = false
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.isLoadingUserById = false
                state.isError = action.payload.message
            })
    },
})

export default userSlice.reducer