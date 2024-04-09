import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllUsersService, createNewUserService } from '../services'

export const fetchAllUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async () => {
        try {
            const response = await getAllUsersService()
            return response
        } catch (error) {
            return error;
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

const initialState = {
    listUsers: [],
    isLoading: false,
    isError: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // fetch all user
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload.data
                state.isLoading = false
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload.message
            })

        // create new user
        builder
            .addCase(createNewUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload.message
            })
    },
})

export default userSlice.reducer