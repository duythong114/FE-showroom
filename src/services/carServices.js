// import axios from 'axios'
import axios from '../axios'

const getAllCarsService = (pagination) => {
    return axios.get(`/api/car/get-all-cars?page=${pagination.page}&limit=${pagination.limit}`)
}

const createNewCarService = (data) => {
    return axios.post('/api/car/create-new-car', {
        name: data.name,
        model: data.model,
        description: data.description,
        image: data.image
    })
}

const deleteCarService = (carId) => {
    return axios.delete('/api/car/delete-car', {
        data: {
            carId: carId
        }
    })
}

const updateCarService = (data) => {
    return axios.put('/api/car/update-car', {
        id: data.id,
        name: data.name,
        model: data.model,
        description: data.description,
        image: data.image
    })
}

const getCarsByModelService = (model) => {
    return axios.get(`/api/car/get-cars-by-model?carModel=${model}`)
}

const getCarByIdService = (carId) => {
    return axios.get(`/api/car/get-one-car?carId=${carId}`)
}

export {
    getAllCarsService,
    createNewCarService,
    deleteCarService,
    updateCarService,
    getCarsByModelService,
    getCarByIdService,
}