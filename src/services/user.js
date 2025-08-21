import Api from "../axios/client";

export const updateUserAddresses = async (data) => {
    return Api.put(`/users`, data);
};
