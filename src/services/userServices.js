// import axios from 'axios'
import axios from '../axios'

const loginUserService = (userData) => {
    return axios.post('api/user/login-user', {
        email: userData.email,
        password: userData.password,
    })
}

const createNewUserService = (userData) => {
    return axios.post('/api/user/create-user', {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
        gender: userData.gender,
        groupId: userData.groupId
    })
}

const getAllUsersService = (pagination) => {
    return axios.get(`/api/user/get-all-users?page=${pagination.page}&limit=${pagination.limit}`)
}

export {
    loginUserService,
    createNewUserService,
    getAllUsersService,
}