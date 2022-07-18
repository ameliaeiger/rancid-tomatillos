import React from "react";
import MovieThumbnail from "./MovieThumbnail";
import './Genre.css';

const Genre = ({ data, handleChange }) => {
    
    const miniMovies = data.map(movie => {
        return (
            <MovieThumbnail 
                id= {movie.id}
                key={movie.id}
                posterPath= {movie.poster_path}
                handleChange= {handleChange}
            />                 
        );
    });

    return (
        <div className="movies-container" >
            {miniMovies}
        </div>

    );
};



export default Genre;