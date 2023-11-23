import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};
export const WishlistReducer = createSlice({
    name: "WishlistReducer",
    initialState,
    reducers: {
        setWishlist: (state, action) => {
            state.value = [ ...state.value,action.payload];
        }
    },
});
export const { setWishlist } = WishlistReducer.actions;
export default WishlistReducer.reducer;

