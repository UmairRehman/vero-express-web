import Api from "../axios/client";

export const addToCart = async (data) => {
    try {
        const res = await Api.post("/basket", data);
        return res;
    } catch (error) {
        throw error;
    }
};

export const getCart = async () => {
    try {
        const res = await Api.get("/basket");
        return res;
    } catch (error) {
        throw error;
    }
};

export const deleteCartItem = async (id) => {
    try {
        const res = await Api.post("/basket/delete", { id });
        return res;
    } catch (error) {
        throw error;
    }
};

export const updateBasket = async (data) => {
    try {
        const res = await Api.post("/basket/update-basket", data);
        return res;
    } catch (error) {
        throw error;
    }
};
