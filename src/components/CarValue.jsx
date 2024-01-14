// Import the React library
import React from "react";
// Import the useSelector hook from Redux
import { useSelector } from "react-redux";

// Define the CarValue component
export default function CarValue() {
    // Use the useSelector hook to calculate the total cost of the cars
    const totalCost = useSelector((state) => {
        // Filter the cars list based on the search term
        // Then reduce the filtered list to a total cost
        return state.cars.carsList
            .filter((car) =>
                car.name.toLowerCase().includes(state.cars.search.toLowerCase())
            )
            .reduce((total, car) => total + car.cost, 0);
    });

    // Return the JSX for the component
    // The total cost is displayed in a div
    return <div className="car-value">Total Cost: ${totalCost}</div>;
}