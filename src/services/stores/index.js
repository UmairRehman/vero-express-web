import Api from "../../axios/client";

export const getStores = async (params = {}) => {
    const { per_page = 12, page = 1 } = params;
    return Api.get(`/stores?per_page=${per_page}&page=${page}`);
}; 