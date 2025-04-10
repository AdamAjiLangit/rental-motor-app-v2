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
