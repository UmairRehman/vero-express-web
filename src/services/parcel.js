import Api from "../axios/client";

export const submitParcelOrder = async (data) => {
    return Api.post('/purchase', data);
};

export const getParcelOrders = async (params = {}) => {
    const { per_page = 10, page = 1 } = params;
    return Api.get(`/parcels?per_page=${per_page}&page=${page}`);
};

export const getParcelOrderDetails = async (orderId) => {
    return Api.get(`/parcels/${orderId}`);
};

export const updateParcelOrder = async (orderId, data) => {
    return Api.put(`/parcels/${orderId}`, data);
};

export const cancelParcelOrder = async (orderId) => {
    return Api.delete(`/parcels/${orderId}`);
};
