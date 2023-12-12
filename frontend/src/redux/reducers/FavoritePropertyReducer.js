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
        },
        //add new property to favorite list
        addFevoriteProperty: (state, action) => {
            state.value.push(action.payload);
        },
        removeFevoriteProperty: (state, action) => {
            state.value = state.value.filter((item) => item._id !== action.payload._id);
        }
    },
});
export const { setFevoriteProperty, addFevoriteProperty, removeFevoriteProperty } = FavoritePropertyReducer.actions;
export default FavoritePropertyReducer.reducer;

