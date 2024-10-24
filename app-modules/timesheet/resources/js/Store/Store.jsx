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
})

const Store = configureStore({
    reducer: {
        rows: rowReducer, // Add row reducer
    }
});

export default Store;
