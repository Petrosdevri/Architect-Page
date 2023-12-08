import React, { useEffect, useState } from 'react';
import Project from './Project';
import { Stack } from 'react-bootstrap';
import './Projects.css';

export default function Projects() {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1080);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1080);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <section className='projects w3-container w3-padding-32' id='projects'>
            <h3 className='heading'>Projects</h3>
            {isWideScreen ? (
                <>
                    <Stack direction='horizontal' gap={3}>
                        <Project house='Summer House' url='https://www.w3schools.com/w3images/house5.jpg' />
                        <Project house='Brick House' url='https://www.w3schools.com/w3images/house2.jpg' />
                        <Project house='Renovated' url='https://www.w3schools.com/w3images/house3.jpg' />
                        <Project house='Barn House' url='https://www.w3schools.com/w3images/house4.jpg' />
                    </Stack>
                    <Stack direction='horizontal' gap={3}>
                        <Project house='Summer House' url='https://www.w3schools.com/w3images/house2.jpg' />
                        <Project house='Brick House' url='https://www.w3schools.com/w3images/house5.jpg' />
                        <Project house='Renovated' url='https://www.w3schools.com/w3images/house4.jpg' />
                        <Project house='Barn House' url='https://www.w3schools.com/w3images/house3.jpg' />
                    </Stack>
                </> 
            ) : (
                <>
                    <Stack direction='vertical' gap={3}>
                        <Project house='Summer House' url='https://www.w3schools.com/w3images/house5.jpg' />
                        <Project house='Brick House' url='https://www.w3schools.com/w3images/house2.jpg' />
                        <Project house='Renovated' url='https://www.w3schools.com/w3images/house3.jpg' />
                        <Project house='Barn House' url='https://www.w3schools.com/w3images/house4.jpg' />
                    </Stack>
                    <Stack direction='vertical' gap={3}>
                        <Project house='Summer House' url='https://www.w3schools.com/w3images/house2.jpg' />
                        <Project house='Brick House' url='https://www.w3schools.com/w3images/house5.jpg' />
                        <Project house='Renovated' url='https://www.w3schools.com/w3images/house4.jpg' />
                        <Project house='Barn House' url='https://www.w3schools.com/w3images/house3.jpg' />
                    </Stack>
                </> 
            )}
        </section>
    )
}