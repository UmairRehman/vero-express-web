import Api from "../axios/client";

export const getWallet = async () => {
    return Api.get(`/wallet`);
};

export const addCardToWallet = async (data) => {
    try {
        const res = await Api.post("/wallet", data);
        return res;
    } catch (error) {
        throw error;
    }
};
