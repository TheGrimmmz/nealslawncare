import React from 'react'
import {data} from '../../json/aboutData.json'
import Policy from '../../Components/Policy/Policy'
import './About.css'

function About() {
  return (
    <div className='about-container'>
      <div className='about-card'>
        <h1 className='about-title'>SERVICE POLICY</h1>
        <Policy data={data}/>
      </div>
    </div>
  )
}

export default About
