import './App.css';
import Movie from "./Movie";
import Display from "./Display";
import Header from "./Header";
import movieData from "./movieData";
import { getTrailer } from './apiCalls';
import React from 'react';
import { 
  Redirect, 
  Route,
  Switch
} from 'react-router-dom';
import { getMovies } from './apiCalls';
import Error from './Error';

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
      selectedMovie:event.target.id,
    });
  };

  // showTrailer = (id) => {
  //   async (id) => {
  //     await getTrailer(id).then(data => {
  //         let key = data.videos[0].key
          
  //     })
  //   };
  // };


  render() {
    return (
      <>
        <Header />
          <Switch>
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
            <Route path="*" render={() => {
                return <Error />
              }}>
          </Route>
        </Switch>
      </>
    );
  };
};

export default App;