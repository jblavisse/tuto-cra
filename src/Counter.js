import React, { Component } from 'react'

export default class Counter extends Component {

    state= {
        score: 0
    } 

    increment = () => {
        // this.setState -> Modifie des états et demande un obj
        // score -> l'état qu'on veut modifier
        // this.state.score + 1 -> La valeur qu'on veut donner à l'état
        this.setState({
            score: this.state.score +1
        })
    }

    render() {
        return (
            <button onClick={this.increment}>
                {this.props.what} {this.state.score} {this.props.something}
            </button>
        )
    }
}
