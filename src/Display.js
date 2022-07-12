import React from "react";
import Genre from "./Genre";
import './Display.css';

const Display = ({ data, handleChange }) => {

    return (
        <section className="display-boxes">
            <Genre 
                data = {data}
                handleChange = {handleChange}
            />
        </section>
    );
};



export default Display;