import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'Dwight',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    <Greeting {...user}/>,
    document.getElementById('root')
);


function luckyNumber(){
    return (Math.floor(Math.random()*1000)+1);
}


function Greeting(props){
    return (
    <div className="container">
        <h1>Welcome {props.name}</h1>
        <h2 className="text-muted">Your lucky number is: {props.luckyNumber}</h2>
    </div>)
}