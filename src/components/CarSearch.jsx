// Import the React library
import React from "react";
// Import the useDispatch and useSelector hooks from Redux
import { useDispatch, useSelector } from "react-redux";
// Import the changeSearchTerm action creator from the store
import { changeSearchTerm } from "../redux/store.js";

// Define the CarSearch component
export default function CarSearch() {
    // Use the useDispatch hook to get the dispatch function
    const dispatch = useDispatch();

    // Use the useSelector hook to extract the search term from the Redux store
    const { search } = useSelector((state) => state.cars);

    // Define a function to handle changes to the search term
    function handleSearchTermChange(e) {
        // Dispatch the changeSearchTerm action with the new search term as the payload
        dispatch(changeSearchTerm(e.target.value));
    }

    // Return the JSX for the component
    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input
                    className="input"
                    placeholder="search..."
                    value={search}
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    );
}