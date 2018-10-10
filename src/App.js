import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import IModal from 'react-imodal';

class App extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
      moviedata: {
        results: [],
      },
      open: false,
      singlemoviedata: { },
    }
     
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
  popupfunction(id){
    Axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US`)
    .then((response) =>{
      this.setState({singlemoviedata: response.data,open: true})
      console.log(response.data)
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
                
                <div className="imagecontain" onClick={() => this.popupfunction(movie.id)}>
                  
                  <img alt="" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                  <div className="overview" > {movie.overview} </div>
                </div>
                <p>Rating: {movie.vote_average}/10</p>
              </div>
              
            </div>
           )
        } )}
        
        <div onClick={this.gotoPageTwo}><h3>Next Page</h3></div>
        <IModal                
          open={this.state.open}
          onClose={() => this.setState({open: false})}
          title={this.state.singlemoviedata.title}
          content={
            <div>
              <div>Status: {this.state.singlemoviedata.status}</div>
              <div> Release date: {this.state.singlemoviedata.release_date}</div>
            </div>
        }
        />
      </div>
    );
  }
}

export default App;

