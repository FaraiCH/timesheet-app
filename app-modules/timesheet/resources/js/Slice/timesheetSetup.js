// Timesheet Initial Setup
import { createSlice } from '@reduxjs/toolkit';
import dateSpread from "./plugins/dateSpread.js";
import getStartOfWeek from "./plugins/startOfWeek.js";
import { calculateHours } from "./plugins/hourCalculator.js";
import calculateDoubleTime from "./plugins/calculateDoubleTime.js";
// Create the initial state for the slice of the time sheet
// This will set the number of rows on the time sheet as well
const initialState = {
    numberOfRows: 5, // Default number of rows
    rows: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        startTime: '',
        endTime: '',
        overtime: 0,
        doubleTime: 0,
        dateCaptured: dateSpread(getStartOfWeek(new Date()), i, ''), // Keep note by default we are loading Monday to Friday in the current week
        dateFormat: dateSpread(getStartOfWeek(new Date()), i, 'dateFormat'),
        hourRange: 12,
        user_id: '',
        comment: '',
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
        setSideMenu(state, action) {
            // Remember, state here can have any name. We just gave attached names like dateReady, numberOfRows and rows.
            // These are declared here and used when we select states on other components
            state.dateReady = action.payload.date; // Using the action payload to get the date from the Side Menu
            state.numberOfRows = action.payload.noRows; // Using the action payload to get the days to be captured from Side Menu
            // Bellow we are looping through action.payload.noRows that came from the side Menu
            // This will be mapped to the timesheet controls using the variable names
            state.rows = Array.from({ length: action.payload.noRows }, (_, i) => ({
                id: i + 1,
                startTime: '',
                endTime: '',
                overtime: 0,
                doubleTime: 0,
                dateCaptured: dateSpread(action.payload.date, i, ''), // Here we are using the date spread to get the days according to 'Days to Capture'
                dateFormat: dateSpread(action.payload.date, i, 'dateFormat'),
                hourRange: action.payload.hourRange,
                user_id: '',
                comment: action.payload.comment,

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
                row.overtime = calculateHours(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);
                row.doubleTime = calculateDoubleTime(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);
            }
        },
        setComment: (state, action) => {
            const { id, comment } = action.payload;
            const row = state.rows.find(row => row.id === id);
            if (row)
            {
                row.comment = comment;
                row.overtime = calculateHours(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);
                row.doubleTime = calculateDoubleTime(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);
            }
        },
        setShift: (state, action) => {
            const { id, shift } = action.payload;
            const row = state.rows.find(row => row.id === id);
            if (row)
            {
                row.shift = shift;
                if(row.shift === 'Day')
                {
                    row.startTime = '06:00';
                    row.endTime = '18:00';
                }
                else
                {
                    row.startTime = '18:00';
                    row.endTime = '06:00';
                }
                row.overtime = calculateHours(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);
                row.doubleTime = calculateDoubleTime(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);
            }
        }
    },
});

// Here we create an action that will be able to be used on both the side Menu and TimeSheet in order to dispatch a change in state
// to the target component
export const { setSideMenu, setTime, setComment, setShift } = timesheetSetup.actions;
export default timesheetSetup.reducer;
