import Api from "../axios/client";

export const getCurrentUser = async () => {
    return Api.get(`/api/v1/auth/me`);
};

export const updateUserAddresses = async (data) => {
    return Api.put(`/users`, data);
};

export const updateUserProfile = async (data) => {
    return Api.put(`/api/v1/users/profile`, data);
};

export const deleteProfile = async () => {
    return Api.delete(`/api/v1/users/profile`);
};
