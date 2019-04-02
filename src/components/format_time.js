import React, {Component} from 'react';

class FormatTime extends Component{
    constructor(props){
        super(props);
        this.styleObj={
            display:'inline-block',
            position:'relative',
            left:'50%',
            transform:'translate(-50%)',
            width:'295px'
        }
    }
    convertMillisecondsToTime(){
        const {elapsed} = this.props
        const sec = elapsed/1000;
        const minutes = sec/60;
        return {
            hour:Math.floor(minutes/60),
            min:Math.floor(minutes%60),
            sec:Math.floor(sec%60),
            ms:Math.floor(elapsed%100)
        }
    }
    leadingZero = number => {
        if (number<10){
            const newNumber = '0'+number;
            return newNumber;
        } else {
            return number;
        }
    }
    render(){
        const {hour,min,sec,ms} = this.convertMillisecondsToTime();
        return(
            <div style={this.styleObj}>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}:{this.leadingZero(ms)}</div>
        )
    }
}

export default FormatTime;