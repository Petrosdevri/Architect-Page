import React from "react";
import './Navigation.css';

export default function Navigation() {
    return (
        <navbar className='d-flex padding spacing'>
            <a href='#'><h5><strong>BR</strong> Architects</h5></a>
            <div className='right-navbar justify-content-center aagn-items-center gap-3'>
                <a href='#projects'>Projects</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>
        </navbar>
    )
}