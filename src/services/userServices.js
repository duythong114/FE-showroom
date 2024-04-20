// import axios from 'axios'
import axios from '../axios'

const loginUserService = (userData) => {
    return axios.post('api/user/login-user', {
        email: userData.email,
        password: userData.password,
    })
}

const logoutUserService = () => {
    return axios.get('/api/user/logout-user')
}

const registerNewUserService = (userData) => {
    return axios.post('/api/user/register', {
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

const getUserByIdService = (userId) => {
    return axios.get(`/api/user/get-one-user?id=${userId}`)
}

const getUserRefreshService = () => {
    return axios.get('/api/user/get-user-refresh')
}

const deleteUserService = (userId) => {
    return axios.get(`/api/user/delete-user?userId=${userId}`)
}

export {
    loginUserService,
    logoutUserService,
    registerNewUserService,
    getAllUsersService,
    getUserByIdService,
    getUserRefreshService,
    deleteUserService,
}