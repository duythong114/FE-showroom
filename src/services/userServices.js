// import axios from 'axios'
import axios from '../axios'

export const getAllUsersService = () => {
    return axios.get('/api/user/get-all-users')
}

export const createNewUserService = (userData) => {
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