import Api from "../../axios/client";

export const createOtp = async (data) => {
    return Api.post(`/auth/login-mobile`, data);
};

export const verifyOtp = async (data) => {
    return Api.post(`/auth/verify-code`, data);
};

export const resendOtp = async (data) => {
    return Api.post(`/auth/resend-code`, data);
};