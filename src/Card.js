import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <article className="card">
                <h2 className="card__title">{this.props.bachibouzouk}</h2>
                <p className="card__description">{this.props.description}</p>
                <a className="card__readmore" href="https://www.google.fr">Voir plus</a>
            </article>
        )
    }
}
