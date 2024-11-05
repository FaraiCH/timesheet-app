// Timesheet Initial Setup
import { createSlice } from '@reduxjs/toolkit';
import dateSpread from "./plugins/dateSpread.js";
import getStartOfWeek from "./plugins/startOfWeek.js";
import { calculateHours } from "./plugins/hourCalculator.js";
import calculateDoubleTime from "./plugins/calculateDoubleTime.js";
import calculateNormalTime from "./plugins/calculateNormalTime.js";

// Create the initial state for the slice of the time sheet
// This will set the number of rows on the time sheet as well
const initialState = {
    numberOfRows: 5, // Default number of rows
    rows: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        startTime: new Date(dateSpread(getStartOfWeek(new Date()), i, 'dateFormat') + " " + "06:00:00"),
        endTime: new Date(dateSpread(getStartOfWeek(new Date()), i, 'dateFormat') + " " + "18:00:00"),
        normal: 12,
        overtime: 0,
        doubleTime: 0,
        dateCaptured: dateSpread(getStartOfWeek(new Date()), i, ''), // Keep note by default we are loading Monday to Friday in the current week
        dateFormat: dateSpread(getStartOfWeek(new Date()), i, 'dateFormat'),
        hourRange: 12,
        user_id: '',
        shift: 'Day',
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
                startTime: new Date(dateSpread(action.payload.date, i, 'dateFormat') + " " + "06:00:00"),
                endTime: new Date(dateSpread(action.payload.date, i, 'dateFormat') + " " + "18:00:00"),
                normal: calculateNormalTime(dateSpread(action.payload.date, i, 'dateFormat'), (dateSpread(action.payload.date, i, 'dateFormat') + " " + "06:00:00"), (dateSpread(action.payload.date, i, 'dateFormat') + " " + "18:00:00"), action.payload.hourRange, action.payload.shift),
                overtime: calculateHours(dateSpread(action.payload.date, i, 'dateFormat'), (dateSpread(action.payload.date, i, 'dateFormat') + " " + "06:00:00"), (dateSpread(action.payload.date, i, 'dateFormat') + " " + "18:00:00"), action.payload.hourRange, action.payload.comment, action.payload.shift),
                doubleTime: calculateDoubleTime(dateSpread(action.payload.date, i, 'dateFormat'), (dateSpread(action.payload.date, i, 'dateFormat') + " " + "06:00:00"), (dateSpread(action.payload.date, i, 'dateFormat') + " " + "18:00:00"), action.payload.hourRange, action.payload.comment, action.payload.shift),
                dateCaptured: dateSpread(action.payload.date, i, ''), // Here we are using the date spread to get the days according to 'Days to Capture'
                dateFormat: dateSpread(action.payload.date, i, 'dateFormat'),
                hourRange: action.payload.hourRange,
                user_id: '',
                shift: 'Day',
                comment: action.payload.comment,

            }));
        },
        // This concerns the actual Time Sheet
        setTime: (state, action) => {
            const {id, time, type } = action.payload; // Here, our action payload has an object which we deconstruct

            const row = state.rows.find(row => row.id === id);
            if(row)
            {
                if (type === 'start') {
                    row.startTime = time;
                } else if (type === 'end') {
                    row.endTime = time;
                }
                row.normal = calculateNormalTime(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.shift);
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
                row.normal = calculateNormalTime(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.shift);
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
                    row.startTime = new Date(row.dateFormat + " " + "06:00:00");
                    row.endTime = new Date(row.dateFormat + " " + "18:00:00");
                }
                else
                {
                    row.startTime = new Date(row.dateFormat + " " + "18:00:00");
                    row.endTime = new Date(row.dateFormat + " " + "06:00:00");
                }
                row.normal = calculateNormalTime(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.shift);
                row.overtime = calculateHours(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);
                row.doubleTime = calculateDoubleTime(row.dateFormat, row.startTime, row.endTime, row.hourRange, row.comment, row.shift);

            }
        },
    },
});

// Here we create an action that will be able to be used on both the side Menu and TimeSheet in order to dispatch a change in state
// to the target component
export const { setSideMenu, setTime, setComment, setShift } = timesheetSetup.actions;
export default timesheetSetup.reducer;
