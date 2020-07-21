import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

constructor () {
    super();

    this.state ={
        evenArray: [],
        oddArray: [],
        userInput: ' '
    }
}

handleChange(val) {
    this.setState({ userInput: val });
}

assignEvenAndOdds(userInput) {
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
}



    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds (this.userInput)}} > Split </button>
                <span className="resultBox" > Even: {JSON.stringify(this.state.evenArray) } </span>
                <span className="resultBox" > Odd: {JSON.stringify(this.state.oddsArray) } </span>  
            </div>

        )
    }
}