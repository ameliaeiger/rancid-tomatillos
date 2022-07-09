import React from "react";
import Genre from "./Genre";
import './Display.css';

const Display = ({ data }) => {

    // When we get the genre from API, then we can filter and 
    // sort the movies into genres.

    return (
        <div className="display-boxes">
            <Genre data={data}/>
        </div>

    );
};



export default Display;