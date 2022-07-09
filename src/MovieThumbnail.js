import React from "react";
import './MovieThumbnail.css';

const MovieThumbnail = ({ id, posterPath, handleChange }) => {
    

    return (
        <div id={id} className="movie-thumbnails" onClick={event => handleChange(event)}>
            <img src={posterPath} height="150px" width="150px"/>
        </div>
    );
};



export default MovieThumbnail;