import Api from "../../axios/client";

export const getStores = async (params = {}) => {
    const { per_page = 12, page = 1 } = params;
    return Api.get(`/stores?per_page=${per_page}&page=${page}`);
};

// Fetch categories for a given store name
export const getStoreCategories = async ({ store_name, page = 1 }) => {
    return Api.get(`/stores/categories?store_name=${encodeURIComponent(store_name)}&page=${page}`);
};

// Search products in a store with filters
export const searchStoreProducts = async (params = {}) => {
    // Build query string from params
    const query = new URLSearchParams({
        store_name: params.store_name || '',
        parent_id: params.parent_id || '',
        product_name: params.product_name || '',
        per_page: params.per_page || 10,
        page: params.page || 1,
    }).toString();
    return Api.get(`/stores/search-product?${query}`);
}; 