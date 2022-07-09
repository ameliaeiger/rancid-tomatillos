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
      data: movieData,
      currentView: "main",
      error: "",
      selectedMovie: 0
    };
  };

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
    let userSelectedMovie = this.state.data.movies.find(movie => this.state.selectedMovie == movie.id)

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
        />}
      </div>
    )
  };
};

export default App;
