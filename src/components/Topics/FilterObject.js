import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
        family: [
        {
            name: 'Kody Brabson',
            job: 'student',
            age: 26
        },
        {
            name: 'Alysse Brabson',
            hairColor: `red`,
            age: 'never ask a lady her age'
        },
        {
            name: 'Luna',
            breed: 'pug',
            goodGirl: 'yes'
        }
        ],
    
      userInput: '',
      filteredFamily: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterFamily(prop) {
    let family = this.state.family;
    let filteredFamily = [];

    for ( let i = 0; i < family.length; i++ ) {
      if ( family[i].hasOwnProperty(prop) ) {
        filteredFamily.push(family[i]);
      }
    }

    this.setState({ filteredFamily: filteredFamily });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.family, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterFamily(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredFamily, null, 10) } </span>
      </div>
    )
  }
}