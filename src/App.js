import './App.css';
import Movie from "./Movie";
import Display from "./Display";
import Header from "./Header";
import movieData from "./movieData";
import React from 'react';
import { 
  Redirect, 
  Route,
  Switch
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
    .then(movies => this.setState({data: movies.movies}));
  }

  handleChange = (event) => {
    this.setState({
      selectedMovie:event.target.parentElement.id,
    });
  };

  showDetails = (event) => {
    console.log("event triggered", this.state)
    this.setState({
      selectedMovie:event.target.parentElement.id,
    });
  };

  animate = (e) => {
    console.log("animate")
    e.target.classList.remove("hidden");
    e.target.classList.add("appear");
    console.log("animate");
  }

  render() {
    return (
      <>
        <Header 
          animate={this.animate}
          />
          <Switch>
            <Route exact path="/dashboard" render={() => {
              return <Display 
                data={this.state.data}
                handleChange={this.handleChange}
                showDetails={this.showDetails}
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
        </Switch>
      </>
    )
  }
};

export default App;