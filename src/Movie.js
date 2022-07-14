import React, { Component } from "react";
import './Movie.css';
import { Link } from 'react-router-dom';
import { getDetails } from './apiCalls';

class Movie extends Component {

    constructor ({ selectedMovie, handleChange }) {
        super();
        this.state = {
            movieInfo: {},
            selectedMovie: selectedMovie,
        }
    }

    componentDidMount = () => {
        getDetails(this.state.selectedMovie)
            .then(movieInfo => this.setState({movieInfo: movieInfo.movie}));
    }
    
    render() {
        let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + this.state.selectedMovie; 

        return (
            <div className="page-wrapper" style={{backgroundImage: `url(${this.state.movieInfo.backdrop_path})`}}>
            <div className="individual-movie-view" 
            // style={{
            //     backgroundImage: `url(${this.state.movieInfo.backdrop_path})`,
            // }}
            >
                <div className="movie-details">
                    {/* <div className="individual-movie-image"> */}
                        <img className="individual-movie-image" src={this.state.movieInfo.poster_path}/>
                    {/* </div> */}
                    <section className="movie-info">
                        <p className="movie-title" style={{fontSize: "40px"}}>
                        {this.state.movieInfo.title}  
                        </p>
                        <p className="movie-rating">
                        Rating: {this.state.movieInfo.average_rating}  
                        </p>
                        <p>
                        Overview: {this.state.movieInfo.overview}  
                        </p>
                        <p>
                        Runtime: {this.state.movieInfo.runtime} min.  
                        </p>
                        <p>
                        Release Date: {this.state.movieInfo.release_date}  
                        </p>
                        {/* <p>
                        Genre: {this.state.movieInfo.genres[0]}  
                        </p> */}
                    </section>
                </div>
                <Link to={'/dashboard'}>
                        <button className="go-back-button">
                            Go Back!
                        </button>
                </Link>    
                {/* <img src={`${this.state.movieInfo.backdrop_path}`} className="backdrop-image"/>        */}
            </div>
            </div>
        );
    }
};

export default Movie;