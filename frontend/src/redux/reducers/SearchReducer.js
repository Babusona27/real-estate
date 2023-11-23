import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: []
};
export const SearchReducer = createSlice({
    name: "Search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            const { key, item } = action.payload;

            // Check if the key already exists in the array
            const existingIndex = state.value.findIndex(entry => entry.key === key);

            if (existingIndex !== -1) {
                // If key exists, replace the existing value
                state.value[existingIndex] = { key, item };
            } else {
                // If key doesn't exist, add a new object to the array
                state.value = [...state.value, { key, item }];
            }
        },
        removeSearch: (state, action) => {
            const { keyToRemove } = action.payload;
            state.value = state.value.filter(item => item.key !== keyToRemove);
        }


    }
});
export const { setSearch, removeSearch } = SearchReducer.actions;
export default SearchReducer.reducer;