import React from "react";
import './Movie.css';

const Movie = ({ selectedMovie, handleChange, userSelectedMovieInfo }) => {

    console.log(userSelectedMovieInfo.backdrop_path)
    return (
        <div className="individual-movie-view" 
        style={{
            backgroundImage: `url(${userSelectedMovieInfo.backdrop_path})`,
            }}>
            <div className="individual-movie-image">
                <img src={userSelectedMovieInfo.poster_path}/>
            </div>
            <div className="movie-info">
                <p>
                {userSelectedMovieInfo.title}  
                </p>
                <p>
                Rating: {userSelectedMovieInfo.average_rating.toFixed(1)}  
                </p>
                <p>
                Release Date: {userSelectedMovieInfo.release_date}  
                </p>
                <button onClick={event => handleChange(event)}>Go Back!</button>
            </div>
            
        </div>
    );
};



export default Movie;