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
           <div>
             <h1>{movie.title}</h1>
             <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            </div>
           )
        } )}
      </div>
    );
  }
}

export default App;

