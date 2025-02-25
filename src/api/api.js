import axios from "axios";
import { getSession } from "next-auth/react";

const apiClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
    headers: {
        "Content-Type": "application/json"
    },
});

apiClient.interceptors.request.use(
    async (request) => {
        const session = await getSession()
        if (session && session.user) {
            request.headers.Authorization = `Bearer ${session.access_token}`;

            console.log(session.access_token)
            console.log(session.user)
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle responses globally
// apiClient.interceptors.response.use(
//     (response) => {
//
//         return response.data?.data || response.data;
//     },
//     (error) => {
//         return Promise.reject(error.response?.data || error.message);
//     }
// );

const api = {
    get: (url, options = {}) => apiClient.get(url, options),
    post: (url, body, options = {}) => apiClient.post(url, body, options),
    put: (url, body, options = {}) => apiClient.put(url, body, options),
    delete: (url, options = {}) => apiClient.delete(url, options),
};

const makeResponseFailed = ({ status = "failed", message = "", data = null }) => {
    throw { status, message, data };
};

export { api, makeResponseFailed };