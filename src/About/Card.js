import React from 'react';
import { Button } from 'react-bootstrap';

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.url} alt={props.alt} />
            <h3>{props.name}</h3>
            <p className='w3-opacity'>{props.profession}</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <Button variant='light'>Contact</Button>
        </div>
    )
}