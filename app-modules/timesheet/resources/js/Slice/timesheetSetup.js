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

const timesheetSetup = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        setNumberOfRows(state, action) {
            state.dateReady = action.payload.date;
            state.numberOfRows = action.payload.noRows;
            state.rows = Array.from({ length: action.payload.noRows }, (_, i) => ({
                id: i + 1,
                startTime: '',
                endTime: '',
                overtime: '',
                doubleTime: '',
            }));
        },
        setTime: (state, action) => {
            const {id, time, type } = action.payload;
            const row = state.rows.find(row => row.id === id);

            if(row)
            {
                if (type === 'start') {
                    row.startTime = time;
                } else if (type === 'end') {
                    row.endTime = time;
                }
                row.overtime = 22;
            }
        },
    },
});

export const { setNumberOfRows, setTime } = timesheetSetup.actions;
export default timesheetSetup.reducer;
