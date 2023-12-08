import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <section className='home d-flex flex-column justify-content-center align-items-center'>
            <img src='https://www.w3schools.com/w3images/architect.jpg' alt='architect' />
            <div className='headline padding'>
                <h1 className='spacing'><span className='br'><strong>BR</strong></span> <span className='architects'>Architects</span></h1>
            </div>
        </section>
    )
}