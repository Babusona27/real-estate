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
        updateFevoriteProperty: (state, action) => {
            state.value = [ ...state.value,action.payload];
        }       
    }
});
export const { setPropertyList } = PropertyListReducer.actions;
export default PropertyListReducer.reducer;