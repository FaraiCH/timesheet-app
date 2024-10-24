// src/Slices/rowSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfRows: 5, // Default number of rows
    rows: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        startTime: '',
        endTime: '',
        overtime: '',
        doubleTime: '',
    })),
};

const rowSlice = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        setNumberOfRows(state, action) {
            state.numberOfRows = action.payload;
            state.rows = Array.from({ length: action.payload }, (_, i) => ({
                id: i + 1,
                startTime: '',
                endTime: '',
                overtime: '',
                doubleTime: '',
            }));
        },
    },
});

export const { setNumberOfRows } = rowSlice.actions;
export default rowSlice.reducer;
