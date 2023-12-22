import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: null,
};
export const SellerPropertyListReducer = createSlice({
    name: "SellerPropertyList",
    initialState,
    reducers: {
        setSellerPropertyList: (state, action) => {
            state.value = action.payload;
        }

    },
});
export const { setSellerPropertyList } = SellerPropertyListReducer.actions;
export default SellerPropertyListReducer.reducer;