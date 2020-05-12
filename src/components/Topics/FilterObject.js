import React, {Component} from 'react';

export default class FilterObject extends Component{

    constructor(){
        super();
        this.state ={
            movies: [
                {
                    title: "The Fellowship of the Ring",
                    director: "Peter Jackson",
                    year: 2001
                },
                {
                    title: "The Sorcerer's Stone",
                    main_actor: "Daniel Radcliffe",
                },
                {
                    title: "A New Hope",
                    year: 1977
                }
            ],
            userInput: '',
            filteredMovies: []
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterMovies(prop){
        let movies= this.state.movies;
        let filteredMovies = [];

        for(let i = 0; i< movies.length; i++){
            if(movies[i].hasOwnProperty(prop)){
                filteredMovies.push(movies[i]);
            }
        }
        this.setState({ filteredMovies: filteredMovies});
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
            <span className="puzzleText">Original: {JSON.stringify(this.state.movies, null, 10)} </span>

            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={ ()=> this.filterMovies(this.state.userInput)}>Filter</button>            
            <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredMovies, null, 10)}</span>
            

            </div>
        )
    }
}