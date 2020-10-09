import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    const { monster } = props
    return (
        <div className="card-container ">
            <img src={`https://robohash.org/${monster.id}?set=set2`} alt="monster"/>
            <h3>{monster.name}</h3>
            <span>{monster.email}</span>
        </div>
    )
}