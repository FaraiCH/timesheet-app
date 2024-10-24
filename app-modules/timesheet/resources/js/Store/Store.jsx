import { configureStore } from "@reduxjs/toolkit";
import rowReducer from '../Slice/timesheetSetup.js'; // Import the new slice

const Store = configureStore({
    reducer: {
        rows: rowReducer, // Add row reducer
    }
});

export default Store;
