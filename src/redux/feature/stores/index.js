import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedStore: {},
    allStores: []
};

const shops = createSlice({
    name: "selectedStore",
    initialState: initialState,
    reducers: {
        setSelectedStore: (state, payload) => {
            state.selectedStore = payload.payload;
        },
        setAllStores: (state, payload) => {
            state.allStores = payload.payload;
        },
    },
});

export const { setSelectedStore, setAllStores } = shops.actions;
export const getSelectedStoreDetails = (state) => state.store;
export const getAllStoreDetails = (state) => state.store.allStores;

export default shops.reducer;
