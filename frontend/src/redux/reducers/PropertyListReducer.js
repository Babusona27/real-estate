import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
    count: 0
    };
export const PropertyListReducer = createSlice({
    name: "PropertyList",
    initialState,
    reducers: {
        setPropertyList: (state, action) => {
            state.value = action.payload;
        },
        setPropertyCount: (state, action) => {
            state.count = action.payload;
        },
            // update isFavorite property of property
        updatePropertyList: (state, action) => {
            state.value = state.value.map((item) => {
                if (item._id === action.payload._id) {
                    return { ...item, isFavorite: action.payload.isFavorite };
                }
                return item;
            });
        },
        

    }
});
export const { setPropertyList,updatePropertyList,setPropertyCount } = PropertyListReducer.actions;
export default PropertyListReducer.reducer;