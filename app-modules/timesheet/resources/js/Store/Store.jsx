import { configureStore } from "@reduxjs/toolkit";
import rowReducer from '../Slice/timesheetSetup.js'; // Import the new slice

// We configure store to facilitate communication between components
// We import our slice into here.
const Store = configureStore({
    reducer: {
        rows: rowReducer, // Add row reducer
    }
});

export default Store;
