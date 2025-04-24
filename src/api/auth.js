import { api, makeResponseFailed } from "./api"

export const authAPI = {
    login: async (body) => {
        try {
            return await api.post("auth/login", { ...body });
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
    register: async ({ nama, noHp, jenisKelamin, password }) => {
        try {
            return await api.post("auth/register", { nama, noHp, jenisKelamin, password });
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },

    getUser: async () => {
        try {
            return await api.get("user");
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },

    logout: async () => {
        try {
            return await api.post("logout");
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
}

export const authAdminAPI = {
    login: async (body) => {
        try {
            return await api.post("api/login", { ...body });
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },

    edit: async (body) => {
        try {
            return await api.post("auth/profile-update", { ...body });
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },

    getUser: async (id) => {
        try {
            return await api.get(`api/user/detail/${id}`);
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },

    logout: async () => {
        try {
            return await api.post("logout");
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
}