import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
    return (
        <section className='contact w3-container w3-padding-32' id='contact'>
            <h3 className='w3-padding-16'>Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <form className='d-flex flex-column align-items-start gap-3' method='get'>
                <input type='text' id='name' placeholder='Name' required />
                <input type='email' id='email' placeholder='Email' required />
                <input type='text' id='subject' placeholder='Subject' required />
                <input type='text' id='content' placeholder='Content' required />
                <Button variant='dark'>SEND MESSAGE</Button>
            </form>
        </section>
    )
}