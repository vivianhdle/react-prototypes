import React, {Component} from 'react';
import MovieContainer from './movie-container';
//app will own movie container

export default props => {
    return(
        <div className="container">
            <h1 className="text-center">Top 10 Movies</h1>
            <MovieContainer/>
        </div>
    )
}