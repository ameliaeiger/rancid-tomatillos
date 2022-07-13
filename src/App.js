import './App.css';
import Movie from "./Movie";
import Display from "./Display";
import Header from "./Header";
import movieData from "./movieData";
import React from 'react';
import { 
  Redirect, 
  Route
} from 'react-router-dom';
import { getMovies } from './apiCalls';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: movieData.movies,
      currentView: "main",
      error: "",
      selectedMovie: 694919
    };
  };

  componentDidMount = () => {
    getMovies()
    .then(movies => this.setState({data: movies.movies}))
  }

  handleChange = (event) => {
    this.setState({
      selectedMovie:event.target.parentElement.id,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Route exact path="/dashboard" render={() => {
          return <Display 
            data={this.state.data}
            handleChange={this.handleChange}
          />
        }}>
        </Route>
        <Route path={`/${this.state.selectedMovie}`} render={() => {
          return <Movie 
            selectedMovie={this.state.selectedMovie}
            handleChange={this.handleChange}
          />
        }}>
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" render={() => {
            <Display 
              data={this.state.data}
              handleChange={this.handleChange}
            />
          }}>
          </Redirect>
        </Route>
        <Route exact path="*">
          <Redirect to="/dashboard" render={() => {
            <Display
              data={this.state.data}
              handleChange={this.handleChange}
            />
          }}>
          </Redirect>
        </Route>
      </>
    )
  }
};

export default App;
