// Import the createSlice function from Redux Toolkit
// This function automatically generates action creators and action types
import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

// Create a slice of the Redux store for a form
// A "slice" is a portion of the Redux store where a particular feature keeps its state
const formSlice = createSlice({
    // The name of the slice. This will be used as a prefix for the generated action types
    name: "form",
    // The initial state for this slice of the Redux store
    initialState: {
        name: "", // The initial state for the 'name' field of the form
        cost: 0, // The initial state for the 'cost' field of the form
    },
    // The reducers for this slice of the Redux store
    // Reducers are functions that determine how the state should be updated in response to an action
    reducers: {
        // A reducer for setting the 'name' field of the form
        setName: (state, action) => {
            // Update the 'name' field of the state with the payload of the action
            state.name = action.payload;
        },
        // A reducer for setting the 'cost' field of the form
        setCost: (state, action) => {
            // Update the 'cost' field of the state with the payload of the action
            state.cost = action.payload;
        },
    },
    // Extra reducers for this slice of the Redux store
    extraReducers(builder) {
        // Add an extra reducer for the addCar action
        // This will be called whenever the addCar action is dispatched
        builder.addCase(addCar, (state, action) => {
            // Reset the form state
            state.name = "";
            state.cost = 0;
        });
    },
});

// Export the generated action creators for the form slice
// These can be used to dispatch actions that the reducers will respond to
export const { setName, setCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
