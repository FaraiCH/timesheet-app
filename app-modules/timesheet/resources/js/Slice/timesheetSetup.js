// Timesheet Initial Setup
import { createSlice } from '@reduxjs/toolkit';

// Create the initial state for the slice of the time sheet
// This will set the number of rows on the time sheet as well
const initialState = {
    numberOfRows: 5, // Default number of rows
    rows: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        startTime: '',
        endTime: '',
        overtime: '',
        doubleTime: '',
        dateCaptured: 'None',
        user_id: '',
    })),
};

/*
    We create a slice that has the name row and initialState
    Then we add two reducers
    One Reducers if focused on the Side Menu (Which is the setNumberOfRows Reducer)
    SetTime is focused on the Time Sheet
 */
const timesheetSetup = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        // This concerns the Side Menu
        setNumberOfRows(state, action) {
            // Remember, state here can have any name. We just gave attached names like dateReady, numberOfRows and rows.
            // These are declared here and used when we select states on other components
            state.dateReady = action.payload.date; // Using the action payload to get the date from the Side Menu
            state.numberOfRows = action.payload.noRows; // Using the action payload to get the days to be captured from Side Menu
            // Bellow we are looping through action.payload.noRows that came from the side Menu
            state.rows = Array.from({ length: action.payload.noRows }, (_, i) => ({
                id: i + 1,
                startTime: '',
                endTime: '',
                overtime: '',
                doubleTime: '',
                dateCaptured: action.payload.date,
                user_id: '',

            }));
        },
        // This concerns the actual Time Sheet
        setTime: (state, action) => {
            const {id, time, type } = action.payload; // Here, our action payload has an object which we deconstruct
            // We are getting the rows abd finding the matching ids for those rows and doing calculations with them
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

// Here we create an action that will be able to be used on both the side Menu and TimeSheet in order to dispatch a change in state
// to the target component
export const { setNumberOfRows, setTime } = timesheetSetup.actions;
export default timesheetSetup.reducer;
