import React, {Component} from 'react';
import Movie from './movie';
import axios from 'axios';
class MovieContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
    }
    componentDidMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((response)=>{
            this.setState({
                movies: response.data.feed.entry
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    render(){
        const {movies} = this.state;
        const movieElements = movies.map((movie,index)=>{
            return (
                <Movie key={index} info={movie}/>
            )
        })
        return (
            <div>
                {movieElements}
            </div>
        )    
    }
}


export default MovieContainer;