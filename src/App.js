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
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Movie />
        <Display 
          data={this.state.data}
        />
      </div>
    )
  };
};

export default App;