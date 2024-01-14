// Import the createSlice and nanoid functions from Redux Toolkit
// createSlice automatically generates action creators and action types
// nanoid generates unique IDs
import {createSlice, nanoid} from '@reduxjs/toolkit';

// Create a slice of the Redux store for cars
// A "slice" is a portion of the Redux store where a particular feature keeps its state
const carsSlice = createSlice({
    // The name of the slice. This will be used as a prefix for the generated action types
    name: 'cars',
    // The initial state for this slice of the Redux store
    initialState: {
        search: '', // The initial state for the 'search' field
        carsList: [],   // The initial state for the 'cars' array
    },
    // The reducers for this slice of the Redux store
    // Reducers are functions that determine how the state should be updated in response to an action
    reducers: {
        // A reducer for changing the 'search' field
        changeSearchTerm: (state, action) => {
            // Update the 'search' field of the state with the payload of the action
            state.search = action.payload;
        },
        // A reducer for adding a car to the 'cars' array
        addCar: (state, action) => {
            // Push a new car object to the 'cars' array
            // The car object has a unique ID, a name, and a cost
            state.carsList.push({
                id: nanoid(), // Generate a unique ID for the new car
                name: action.payload.name, // Set the name of the car to the name in the action payload
                cost: action.payload.cost, // Set the cost of the car to the cost in the action payload
            });
        },
        // A reducer for removing a car from the 'cars' array
        removeCar: (state, action) => {
            // Filter the 'cars' array to remove the car with the ID in the action payload
            state.carsList = state.carsList.filter(car => car.id !== action.payload);
        },
    }
});

// Export the generated action creators for the cars slice
// These can be used to dispatch actions that the reducers will respond to
export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;