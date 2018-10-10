import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './apidata.js';

class App extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
      moviedata: data
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.moviedata.results.map( (movie) => {
          return (






           <div className="container">
              <div className="moviegrid">
             <h2>{movie.title}</h2>
            
            <div className="imagecontain">
             <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                  <p className="overview">{movie.overview}</p>
            </div>
                 
                  <p>Rating: {movie.vote_average}</p>
              </div>

            </div>

            






           )
        } )}
      </div>
    );
  }
}

export default App;

