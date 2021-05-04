import React, { Component } from 'react'

export default class Person extends Component {

    state = {
        sentence: ""
    }
    
    lovePoneys = () => {
        this.setState({
            sentence: " et j'aime les poneys"
        })
    }

    render() {
        
        return (
            <h3 onClick={this.lovePoneys}>
                Bonjour, je suis {this.props.firstname} {this.props.lastname}
                 {this.state.sentence}
            </h3>
        )
    }
}
