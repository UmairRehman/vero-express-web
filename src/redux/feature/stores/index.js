import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedStore: {},
};

const shops = createSlice({
    name: "selectedStore",
    initialState: initialState,
    reducers: {
        setSelectedStore: (state, payload) => {
            state.selectedStore = payload.payload;
        },
    },
});

export const { setSelectedStore } = shops.actions;
export const getSelectedStoreDetails = (state) => state.store;

export default shops.reducer;
