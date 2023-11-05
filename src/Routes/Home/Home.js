import React from 'react';
import './Home.css'
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Contact from '../../Components/Contact/Contact';

function Home() {
    return (
      <div className='home-container'>
        <h1 className='home-title'>NEAL'S LAWN CARE</h1>
        <Contact/>
        <Gallery/>
        <Services/>
        <About/>
      </div>
    );
}

export default Home;
