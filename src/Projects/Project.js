import React from 'react';

export default function Project(props) {
    return (
        <div className='project'>
            <div className='house-title w3-display-topleft'>{props.house}</div>
            <img src={props.url} alt='house' />
        </div>
    )
}