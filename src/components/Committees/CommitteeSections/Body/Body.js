import React from 'react';

import InfoCard from './InfoCard/InfoCard'

export default class Body extends React.Component {
    render() {
        return (
            <div className="body-wrapper">
                <h1>Events and Projects</h1>
                <div className="card-container">
                    { this.props.committee.infoCards.map(card => <InfoCard committee={this.props.committee.class} image={card.image} title={card.title} desc={card.desc} key={card.title}/>) }
                </div>
            </div>
        );
    }
}