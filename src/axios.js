import axios from 'axios';
import axiosRetry from 'axios-retry';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

axiosRetry(instance, {
    retries: 3,
    retryCondition: (error) => {
        return error.response.status === 401
    },
    shouldResetTimeout: true,
    retryDelay: (retryCount, error) => {
        return retryCount * 1000
    }
})

// allow set cookies from server
instance.defaults.withCredentials = true;

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let status = error?.response?.status || 500
    let errorMessage = error?.response?.data?.errorMessage

    switch (status) {
        // case 400: {
        //     // toast.error(errorMessage)
        //     break;
        // }
        case 402: {
            toast.error(errorMessage)
            break;
        }
        default: {
            return
            // return error
        }
    }
});

export default instance;
