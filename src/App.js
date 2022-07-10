import './App.css';
import Movie from "./Movie";
import Display from "./Display";
import Header from "./Header";
import movieData from "./movieData";
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: movieData.movies,
      currentView: "main",
      error: "",
      selectedMovie: 0
    };
  };

  componentDidMount = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then ( response => response.json())
        .then (movies => this.updateMovieData(movies.movies))
        .catch(error => alert('Something went wrong.  Please try again later'));
  }

  updateMovieData = (movies) => {
    this.setState({
      data: movies
    })
  }

  handleChange = (event) => {
    let view = this.state.currentView
    if (view === "main") {
      view = "individual"
    } else {
      view = "main"
    };
    this.setState({
      currentView:view,
      selectedMovie:event.target.parentElement.id,
    });
  };

  render() {
    let userSelectedMovie = this.state.data.find(movie => this.state.selectedMovie == movie.id)

    return (
      <div>
        <Header />
        {this.state.currentView === "individual" && <Movie 
          userSelectedMovieInfo={userSelectedMovie}
          selectedMovie={this.state.selectedMovie}
          handleChange={this.handleChange}
        />}
        {this.state.currentView === "main" && <Display 
          data={this.state.data}
          handleChange={this.handleChange}
          updateMovieData = {this.updateMovieData}
        />}
      </div>
    )
  };
};

export default App;
