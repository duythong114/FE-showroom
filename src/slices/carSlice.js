import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    getAllCarsService,
    createNewCarService,
    deleteCarService,
    updateCarService,
    getCarsByModelService,
    getCarByIdService,
} from '../services/carServices'

export const getAllCars = createAsyncThunk(
    'car/getAllCars',
    async (pagination) => {
        try {
            const response = await getAllCarsService(pagination)
            return response
        } catch (error) {
            return error;
        }
    },
)

export const creatNewCar = createAsyncThunk(
    'car/creatNewCar',
    async (data, { rejectWithValue }) => {
        try {
            const response = await createNewCarService(data)
            return response
        } catch (error) {
            return rejectWithValue(error);
        }
    },
)

export const deleteCar = createAsyncThunk(
    'car/deleteCar',
    async (carId) => {
        try {
            const response = await deleteCarService(carId)
            return response
        } catch (error) {
            return error;
        }
    },
)

export const updateCar = createAsyncThunk(
    'car/updateCar',
    async (data) => {
        try {
            const response = await updateCarService(data)
            return response
        } catch (error) {
            return error;
        }
    },
)

export const getCarsByModel = createAsyncThunk(
    'car/getCarsByModel',
    async (model) => {
        try {
            const response = await getCarsByModelService(model)
            return response
        } catch (error) {
            return error;
        }
    },
)

export const getCarById = createAsyncThunk(
    'car/getCarById',
    async (carId) => {
        try {
            const response = await getCarByIdService(carId)
            return response
        } catch (error) {
            return error;
        }
    },
)

const initialState = {
    // common state
    isCarError: null,

    // get all cars with pagination
    isLoadingAllCars: false,
    carList: [],
    totalCarPages: 0,

    // create new car
    isCreatingCar: false,

    // delete car
    isDeletingCar: false,

    // update car
    isUpdatingCar: false,

    // get cars by model
    isLoadingCarsByModel: false,
    CarListByModel: null,

    // get car by id
    isLoadingCarById: false,
    detailCar: null,
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // get all cars
            .addCase(getAllCars.pending, (state, action) => {
                state.isLoadingAllCars = true
            })
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.isLoadingAllCars = false
                state.carList = action.payload?.data?.cars
                state.totalCarPages = action.payload?.data?.totalCarPages
            })
            .addCase(getAllCars.rejected, (state, action) => {
                state.isLoadingAllCars = false
                state.isError = action.payload.message
            })
    },
})

export default carSlice.reducer