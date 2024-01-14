// Import the React library
import React from "react";
// Import the useSelector and useDispatch hooks from Redux
import { useSelector, useDispatch } from "react-redux";
// Import the removeCar action creator from the store
import { removeCar } from "../redux/store.js";

// Define the CarList component
export default function CarList() {

    // Use the useSelector hook to extract data from the Redux store
    const carsList = useSelector((state) => {
        // Filter the cars list based on the search term
        const filteredData = state.cars.carsList.filter((car) =>
            car.name.toLowerCase().includes(state.cars.search.toLowerCase())
        );

        // Return the filtered cars list and the name from the form state
        return {
            cars: filteredData,
            name: state.form.name,
        }
    });

    // Use the useDispatch hook to get the dispatch function
    const dispatch = useDispatch();

    // Log the cars list to the console
    console.log(carsList)

    // Define a function to handle deleting a car
    function handleDelete(car) {
        // Dispatch the removeCar action with the car's ID as the payload
        dispatch(removeCar(car.id));
    }

    // Map over the cars list to create a list of JSX elements
    const renderedCars = carsList.cars.map((car) => {
        return (
            <div className="panel" key={car.id}>
                <p style={{fontWeight: carsList.name == car.name ? 'bold' : 'initial'}}>
                    {car.name} - ${car.cost}
                </p>

                <button
                    className="button is-danger"
                    onClick={() => handleDelete(car)}
                >
                    delete
                </button>
            </div>
        );
    });

    // Return the JSX for the component
    return (
        <div className="car-list">
            {renderedCars}
            <hr></hr>
        </div>
    );
}