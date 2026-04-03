import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: "grid"
};

export const UiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setView: (state, action) => {
            state.view = action.payload;
        }
    }
});


export const { setView } = UiSlice.actions;

export default UiSlice.reducer;