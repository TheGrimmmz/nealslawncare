import React from 'react'
import services from '../../data/servicesData'
import Service from '../../Components/Service/Service'
import './Services.css'


function Services() {
  return (
    <div className='services-container'>
      <h1 className='services-title'>SERVICES</h1>
      <h3 className='services-quote'>*As of right now every service is quote based. Please call or schedule an appointment!*</h3>
      <Service data={services}/>
    </div>
  )
}

export default Services
