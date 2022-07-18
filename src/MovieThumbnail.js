import React from "react";
import './MovieThumbnail.css';
import { getDetails} from "./apiCalls.js"
import { Link } from 'react-router-dom';

class MovieThumbnail extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            avgRating: "",
            isHovering: false
        };
    };
    handleMouseEvent(e) {
        let movieRating
        getDetails(e.target.id).then(data => {
            movieRating = data.movie.average_rating.toFixed(2)
            this.setState(prevState => {
                return {
                    avgRating: movieRating,
                    isHovering: !prevState.isHovering
                };
            });
        });
    };
    render() {
        return (
            <Link to={`/${this.props.id}`}>
                <article className="movie-thumbnails" onMouseOut={event => this.handleMouseEvent(event)} onMouseOver={event => this.handleMouseEvent(event)}  onClick={event => this.props.handleChange(event)}>
                    <div className="thumbnail-wrapper">
                        {this.state.isHovering && <div className='movie-rating'>{this.state.avgRating}</div>}
                        <img src={this.props.posterPath} id={this.props.id} className="movie-poster" />
                    </div>
                </article>
            </Link>
        );
    };
};



export default MovieThumbnail;