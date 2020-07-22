import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor(props){
        super(props);

        this.state = {
            names: [`Jessica`, `James`, `Misty`, `Ash`, `Brook`],
            userInput: ' ',
            filteredName: [ ]
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            userInput :event
        })
    }

    filterNames(userInput) {
        let names = this.state.names
        let filteredNames = [ ];

        for ( let i =0; i < names.length; i++) {
            if (names[i].includes(userInput) ) {
                filteredNames.push(names[i]);
            }
        }
        this.setState({filteredNames: filteredNames });
    }


    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String</h4>
                <span className="puzzleText"> 
                Names: { JSON.stringify(this.state.names, null, 10) } </span>
                <input className="inputLine" 
                onChange={ (event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" 
                onClick={ (event) => this.filterNames(this.state.userInput) }> Filter String </button>
                <span className="resultsBox filterStingRB"> Filtered Names: 
        { JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        )
    }
}