import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: null
    };
export const PropertyReducer = createSlice({
    name: "PropertyDetails",
    initialState,
    reducers: {
        setProperty: (state, action) => {
            state.value = action.payload;
        }        
    }
});
export const { setProperty } = PropertyReducer.actions;
export default PropertyReducer.reducer;
