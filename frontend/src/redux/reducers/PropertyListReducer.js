import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: null
    };
export const PropertyListReducer = createSlice({
    name: "PropertyList",
    initialState,
    reducers: {
        setPropertyList: (state, action) => {
            state.value = action.payload;
        },
            // update isFavorite property of property
        updatePropertyList: (state, action) => {
            state.value = state.value.map((item) => {
                if (item._id === action.payload._id) {
                    return { ...item, isFavorite: action.payload.isFavorite };
                }
                return item;
            });
        }
    }
});
export const { setPropertyList,updatePropertyList } = PropertyListReducer.actions;
export default PropertyListReducer.reducer;