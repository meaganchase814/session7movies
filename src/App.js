import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
      moviedata: {
        results: [],
      }}
      Axios
      .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) => {
        this.setState({moviedata: response.data});
      })

    this.gotoPageTwo = this.gotoPageTwo.bind(this)
  }

  gotoPageTwo()
  {
    Axios
    .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262&page=2")
    .then((response) => {
      this.setState({moviedata: response.data});
    })
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
                 
                <p>Rating: {movie.vote_average}/10</p>
              </div>
              
            </div>
           )
        } )}
        <div onClick={this.gotoPageTwo}><h3>Next Page</h3></div>
      </div>
    );
  }
}

export default App;

