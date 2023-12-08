import './App.css'
import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Projects from './Projects/Projects';

const App = () =>{
    return (
        <div className='App'>
            <Navigation />
            <Home />
            <main className='main w3-content w3-padding'>
                <Projects />
                <About />
                <Contact />
                <img src='https://www.w3schools.com/w3images/map.jpg' alt='map' />
            </main>
            <Footer />
        </div>
    )
}

export default App;