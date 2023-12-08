import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Stack } from 'react-bootstrap';
import './About.css';

export default function About() {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1080);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1080);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });
 
    return (
        <section className='about w3-container w3-padding-32' id='about'>
            <h3 className='w3-padding-16'>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. </p>
            {isWideScreen ? 
                <Stack direction='horizontal' gap={3}>
                    <Card name='John Doe' profession='CEO & Founder' url='https://www.w3schools.com/w3images/team2.jpg' alt='John' />
                    <Card name='Jane Doe' profession='Architect' url='https://www.w3schools.com/w3images/team1.jpg' alt='Jane' />
                    <Card name='Mike Ross' profession='Architect' url='https://www.w3schools.com/w3images/team3.jpg' alt='Mike' />
                    <Card name='Dan Star' profession='Architect' url='https://www.w3schools.com/w3images/team4.jpg' alt='Dan' />
                </Stack>
            : 
                <Stack direction='vertical' gap={3}>
                    <Card name='John Doe' profession='CEO & Founder' url='https://www.w3schools.com/w3images/team2.jpg' alt='John' />
                    <Card name='Jane Doe' profession='Architect' url='https://www.w3schools.com/w3images/team1.jpg' alt='Jane' />
                    <Card name='Mike Ross' profession='Architect' url='https://www.w3schools.com/w3images/team3.jpg' alt='Mike' />
                    <Card name='Dan Star' profession='Architect' url='https://www.w3schools.com/w3images/team4.jpg' alt='Dan' />
                </Stack>
            }
        </section>
    )
}