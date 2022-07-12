import React, { Component } from "react";
import './Movie.css';
import { Link } from 'react-router-dom';
import { getDetails } from './apiCalls';

class Movie extends Component {

    constructor ({ selectedMovie, userSelectedMovieInfo }) {
        super();
        this.state = {
            movieInfo: {},
            selectedMovie: selectedMovie,
            userSelectedMovieInfo: userSelectedMovieInfo
        }
    }

    componentDidMount = () => {
        getDetails(this.state.selectedMovie)
            .then(movieInfo => this.setState({movieInfo: movieInfo.movie}));
    }
    
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

                    <Link to={'/dashboard'}>
                        <button>
                            Go Back!
                        </button>
                    </Link>
                </div>           
            </div>
        );
    }
};

export default Movie;