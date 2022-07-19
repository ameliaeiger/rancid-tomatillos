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
      error: "",
      selectedMovie: 694919,
      movieKeyOne: "",
      movieKeyTwo: "",
      movieKeyThree: ""
    };
  };

  componentDidMount = () => {
    console.log(this.state)
    getMovies()
    .then(movies => this.setState({data: movies.movies}));
    getTrailer(694919).then(data => {
      this.setState({movieKeyOne:data.videos[0].key})
    });
    getTrailer(547017).then(data => {
      this.setState({movieKeyTwo:data.videos[0].key})
    });
    getTrailer(579583).then(data => {
      this.setState({movieKeyThree:data.videos[0].key})
    });
  };

  handleChange = (event) => {
    this.setState({
      selectedMovie:event.target.id,
    });
  };

  render() {
    return (
      <>
        <Header />
          <Switch>
            <Route exact path="/dashboard" render={() => {
              return <Display 
                data={this.state.data}
                handleChange={this.handleChange}
                keyOne={this.state.movieKeyOne}
                keyTwo={this.state.movieKeyTwo}
                keyThree={this.state.movieKeyThree}
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
            <Route exact path="/" render={() => {
              return <Display 
                data={this.state.data}
                handleChange={this.handleChange}
                keyOne={this.state.movieKeyOne}
                keyTwo={this.state.movieKeyTwo}
                keyThree={this.state.movieKeyThree}
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