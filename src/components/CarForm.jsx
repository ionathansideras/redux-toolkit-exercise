// Import the React library
import React from "react";
// Import the useDispatch and useSelector hooks from Redux
import { useSelector, useDispatch } from "react-redux";
// Import the setName, setCost, and addCar action creators from the store
import { setName, setCost, addCar } from "../redux/store.js";

// Define the CarForm component
export default function CarForm() {
    // Use the useDispatch hook to get the dispatch function
    const dispatch = useDispatch();

    // Use the useSelector hook to extract the name and cost from the form state in the Redux store
    const { name, cost } = useSelector((state) => state.form);

    // Define a function to handle changes to the name input
    function handleNameChange(e) {
        // Dispatch the setName action with the new name as the payload
        dispatch(setName(e.target.value));
    }

    // Define a function to handle changes to the cost input
    function handleCostChange(e) {
        // Dispatch the setCost action with the new cost as the payload
        // The unary plus operator is used to convert the value to a number
        dispatch(setCost(+e.target.value));
    }

    // Define a function to handle the form submission
    function handleSubmit(e) {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Dispatch the addCar action with the name and cost as the payload
        dispatch(addCar({ name, cost }));
    }

    // Return the JSX for the component
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">name</label>
                        <input
                            type="text"
                            className="input is-expended"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">cost</label>
                        <input
                            type="number"
                            className="input is-expended"
                            value={cost || ""}
                            onChange={handleCostChange}
                        />
                    </div>
                    <div className="field">
                        <button className="button is-link" type="submit">
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}