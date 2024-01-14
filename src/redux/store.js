// Import the configureStore function from Redux Toolkit
// This function is used to create a Redux store
import { configureStore } from "@reduxjs/toolkit";

// Import the action creators and the reducer from the form slice
import { setName, setCost, formReducer } from "./slices/formSlice";

// Import the action creators and the reducer from the cars slice
import {
    changeSearchTerm,
    addCar,
    removeCar,
    carsReducer,
} from "./slices/carsSlice";

// Create a Redux store
// The store is configured with reducers for the 'cars' and 'form' slices of the state
const store = configureStore({
    reducer: {
        cars: carsReducer, // The reducer for the 'cars' slice of the state
        form: formReducer, // The reducer for the 'form' slice of the state
    },
});

// Export the store and the action creators
// The store is used by the application to manage its state
// The action creators are used to dispatch actions to the store
// we export everything from the store so that we can use it in other files
// because its better to call the action creators from the store than to call them from the slices
export {
    store,
    setName,
    setCost,
    changeSearchTerm,
    addCar,
    removeCar,
}