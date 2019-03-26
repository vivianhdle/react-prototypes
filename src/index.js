import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    greeting(),
    document.getElementById('root')
);


const luckyNumber = () => (Math.floor(Math.random*1000)+1);

const greeting = props => {
    <div className="container">
        <h1>Welcome {props.name}</h1>
        <h2 className="text-muted">Your lucky number is:{luckyNumber()}</h2>
    </div>
}