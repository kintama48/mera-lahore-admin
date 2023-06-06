import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "http://18.234.141.81:6001",
})

const ResponseInterceptor = (response) => {
    return response
}

const RequestInterceptor = async (config) => {
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = 'Bearer ' + token
        config.headers.Accept = 'application/json'
    }
    return config
}

axiosInstance.interceptors.response.use(ResponseInterceptor, async (error) => {
    if (error.response.status === 401) {
        // redirect to login screen
        window.location.href = '/login-signup'
    } else if (error.response.data) {
        return Promise.reject(error.response.data)
    }
    return Promise.reject(error.response)
})

axiosInstance.interceptors.request.use(RequestInterceptor, (error) => {
    Promise.reject(error)
})
