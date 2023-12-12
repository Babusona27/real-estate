import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};
export const FavoritePropertyReducer = createSlice({
    name: "FavoritePropertyReducer",
    initialState,
    reducers: {
        setFevoriteProperty: (state, action) => {
            state.value = action.payload;;
        }
    },
}); 
export const { setFevoriteProperty } = FavoritePropertyReducer.actions;
export default FavoritePropertyReducer.reducer;

