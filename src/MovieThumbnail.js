import React from "react";
import './MovieThumbnail.css';
import { Link } from 'react-router-dom';

const MovieThumbnail = ({ id, posterPath, handleChange, showDetails }) => {
// When a movie is hovered over, it's rating will appear as overlayed text.
    

    return (
        <Link to={`/${id}`}>
            <article id={id} className="movie-thumbnails" onMouseOver={event => showDetails(event)}  onClick={event => handleChange(event)}>
                <img src={posterPath} className="movie-poster" />
            </article>
        </Link>
    );
};



export default MovieThumbnail;