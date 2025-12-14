import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

apiInstance.interceptors.request.use((config) => {
    const isClient = typeof window !== 'undefined';

    if (isClient) {
        const token = localStorage.getItem('access_token');

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

apiInstance.interceptors.response.use((config) => {
    const token = localStorage.getItem('access_token')
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('access_token');
        }
        return Promise.reject(error);
    }
)
