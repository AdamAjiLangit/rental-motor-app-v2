import { get } from "http";
import { api, makeResponseFailed } from "./api"

export const motorAPI = {
    get: async () => {
        try {
            return await api.get("list-motor/all");
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
}

export const reviewAPI = {
    get: async () => {
        try {
        return await api.get("review/all");
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
}

export const detailMotorAPI = {
    get: async (id) => {
        try {
            return await api.get(`list-motor/detail/${id}`);
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
}
