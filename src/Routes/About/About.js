import React from 'react'
import aboutData from '../../data/aboutData'
import Policy from '../../Components/Policy/Policy'
import './About.css'

function About() {
  return (
    <div className='about-container'>
      <div className='about-card'>
        <h1 className='about-title'>SERVICE POLICY</h1>
        <Policy data={aboutData}/>
      </div>
    </div>
  )
}

export default About
