import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

// allow set cookies from server
instance.defaults.withCredentials = true;

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
}
);

export default instance;
