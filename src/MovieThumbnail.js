import React from "react";
import './MovieThumbnail.css';
import { Link } from 'react-router-dom';

const MovieThumbnail = ({ id, posterPath, handleChange }) => {
    

    return (
        <Link to={`/${id}`}>
            <article id={id} className="movie-thumbnails" onClick={event => handleChange(event)}>
                <img src={posterPath} height="300px" />
            </article>
        </Link>
    );
};



export default MovieThumbnail;