import { configureStore, createSlice } from "@reduxjs/toolkit";
import rowReducer from '../Slice/rowSlice'; // Import the new slice

let rowObject  = []

for(let i = 0; i < 5; i++)
{
    rowObject.push({ id: i+1, startTime: '', endTime: '', overtime: '', doubleTime: '' });
}

const inputSlice = createSlice({
    name: 'tracker',
    initialState: {
        rows: rowObject
    },
    reducers: {
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


    }
})

const calculateOvertime = (startTime) => {
    // Example logic: If start time is 18:00, set 2 hours of overtime
    return startTime === '18:00' ? 2 : 0;
};
export const {setTime} = inputSlice.actions;

const Store = configureStore({
    reducer: {
        tracker: inputSlice.reducer,
        rows: rowReducer, // Add row reducer
    }
});

export default Store;
