import React from "react";
import './MovieThumbnail.css';

const MovieThumbnail = ({ id, posterPath }) => {
    

    return (
        <div id={id} className="movie-thumbnails">
            <img src={posterPath} height="150px" width="150px"/>
        </div>
    );
};



export default MovieThumbnail;