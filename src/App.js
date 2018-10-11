import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import IModal from 'react-imodal';
import Search from './Search.js'

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
    this.getInfo = this.getInfo.bind(this)
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
  getInfo = (query) => {
    Axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(( data ) => {
        this.setState({
          moviedata: data.data
        })
      })
  }

  render() {
    return ( 
      
      <div className="App">
        
        <div className="banner">
        <h1 className="bannertext">The  
          Internet  
          Movie  
          DataBase 
           5000</h1>
        <Search somename={this.getInfo}></Search>
        </div>

        {this.state.moviedata.results.map( (movie) => {
          return (
            
            <div className="container">
           
              <div className="moviegrid">
                <h2>{movie.title}</h2>
                
                <div className="imagecontain" onClick={() => this.popupfunction(movie.id)}>
                  
                  <img alt="" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                  <div className="overview" >Overview: {movie.overview} </div>
                </div>
                <p>Rating: {movie.vote_average}/10</p>
              </div>
              
            </div>
           )
        } )}
        
        <div onClick={this.gotoPageTwo}><h3>Next Page</h3></div>
        <a href="App.js">Back</a>
        <div ><IModal className="mymodal"                
          open={this.state.open}
          onClose={() => this.setState({open: false})}
          title={this.state.singlemoviedata.title}
          content={
            <div>
              <div>Status: {this.state.singlemoviedata.status}</div>
              <div> Release date: {this.state.singlemoviedata.release_date}</div>
              <div>Popularity: {this.state.singlemoviedata.popularity}</div>
              <div>Original Language: {this.state.singlemoviedata.original_language}</div>
              <div><img alt="" src={"https://image.tmdb.org/t/p/w500" + this.state.singlemoviedata.backdrop_path}/></div>
              
            </div>
        }
        /></div>
      </div>
    );
  }
  
}

export default App;

