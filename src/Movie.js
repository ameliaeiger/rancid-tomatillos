import React, { Component } from "react";
import './Movie.css';
import { Link } from 'react-router-dom';
import { getDetails } from './apiCalls';

class Movie extends Component {
    constructor ({ selectedMovie, handleChange }) {
        super();
        this.state = {
            movieInfo: {},
            selectedMovie: {selectedMovie},
        }
    };
    componentDidMount = () => {
        getDetails(this.state.selectedMovie.selectedMovie)
            .then(movieInfo => this.setState({movieInfo: movieInfo.movie}));
    };
    render() {
        let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + this.state.selectedMovie; 
        return (
            <div className="page-wrapper" style={{backgroundImage: `url(${this.state.movieInfo.backdrop_path})`}}>
                <section className="individual-movie-view" >
                    <div className="movie-details">
                            <img className="individual-movie-image" src={this.state.movieInfo.poster_path}/>
                        <section className="movie-info">
                            <p className="movie-title" style={{fontSize: "40px"}}>
                            {this.state.movieInfo.title}  
                            </p>
                            <div className="movie-rating">
                                <p className="heading">Rating:</p>
                                <p className="info">{this.state.movieInfo.average_rating}</p>  
                            </div>
                            <div className="movie-overview">
                                {this.state.movieInfo.overview}  
                            </div>
                            <div className="movie-runtime">
                                <p className="heading">Runtime:</p>
                                <p className="info">{this.state.movieInfo.runtime} min.</p> 
                            </div>
                            <div className="movie-release-date">
                                <p className="heading">Release Date:</p>
                                <p className="info">{this.state.movieInfo.release_date}</p>
                            </div>
                        </section>
                    </div>
                    <Link to={'/dashboard'}>
                            <button className="go-back-button">
                                Go Back!
                            </button>
                    </Link>    
                </section>
            </div>
        );
    };
};

export default Movie;