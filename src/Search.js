import React, { Component } from 'react';




class Search extends Component {
    constructor(props)
    {
      super(props)
  
      this.state = {
          query: " ",
          results: [],
      }
      
      this.handleInputChange = this.handleInputChange.bind(this)

    }
        handleInputChange = () => {
        this.setState({
          query: this.search.value
        })}
    
       
        

    render() {
       
        return (
        <div>
            <input ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <button onClick ={ () => {this.props.somename(this.state.query)}}>Search</button>   </div>
       );
    }   
    
}
export default Search