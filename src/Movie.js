import React, { Component } from "react";
import './Movie.css';

class Movie extends Component {

    constructor ({ selectedMovie, handleChange, userSelectedMovieInfo }) {
        super();
        this.state = {
            movieInfo: {},
            selectedMovie: selectedMovie,
            handleChange: handleChange,
            userSelectedMovieInfo: userSelectedMovieInfo
        }
    }

    componentDidMount = () => {
        return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + this.state.selectedMovie)
            .then(response => response.json())
            .then(movieInfo => this.updateMovieInfo(movieInfo))
            .catch(error => alert('Something went wrong.  Please try again later'))
    }
    
    updateMovieInfo = (movie) => {
        this.setState({
          movieInfo: movie.movie
        })
      }
    
    // console.log(userSelectedMovieInfo.backdrop_path)
    render() {
        let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + this.state.selectedMovie; 
        console.log(url);

        return (
            <div className="individual-movie-view" 
            style={{
                backgroundImage: `url(${this.state.movieInfo.backdrop_path})`,
            }}>
                <div className="individual-movie-image">
                    <img src={this.state.movieInfo.poster_path}/>
                </div>
                <div className="movie-info">
                    <p>
                    {this.state.movieInfo.title}  
                    </p>
                    <p>
                    Rating: {this.state.movieInfo.average_rating}  
                    </p>
                    <p>
                    Release Date: {this.state.movieInfo.release_date}  
                    </p>
                    <p>
                    Overview: {this.state.movieInfo.overview}  
                    </p>
                    <p>
                    Budget: {this.state.movieInfo.budget}  
                    </p>
                    <p>
                    Revenue: {this.state.movieInfo.revenue}  
                    </p>
                    <p>
                    Release Date: {this.state.movieInfo.release_date}  
                    </p>
                    <p>
                    Release Date: {this.state.movieInfo.release_date}  
                    </p>




                    <button onClick={event => this.state.handleChange(event)}>Go Back!</button>
                </div>           
            </div>
        );
    }
};

export default Movie;