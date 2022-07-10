import React from "react";
import Genre from "./Genre";
import './Display.css';

const Display = ({ data, handleChange }) => {

    // When we get the genre from API, then we can filter and 
    // sort the movies into genres.

    return (
        <div className="display-boxes">
            <Genre 
            data = {data}
            handleChange={handleChange}
            />
        </div>

    );
};



export default Display;