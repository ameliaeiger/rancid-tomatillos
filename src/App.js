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
      selectedMovie: ""
    };
  };

  handleChange(event) {
    console.log("initial state", this.state)
    console.log(event.target.parentElement.id)
    this.setState({
      currentView:"individual",
      selectedMovie:event.target.parentElement.id,
    });
    console.log("altered state", this.state)
  };

  render() {
    return (
      <div>
        <Header />
        <Movie />
        <Display 
          data={this.state.data}
          handleChange={this.handleChange}
        />
      </div>
    )
  };
};

export default App;
