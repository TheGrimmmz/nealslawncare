import React from 'react'
// import Footer from '../../Footer/Footer'
import { Carousel } from '../../Components/Carousel/Carousel'
import slides from '../../data/carouselData'
import './Gallery.css'

function Gallery() {
  return (
    <div className='gallery-container'>
      <h1 className='gallery-title'>GALLERY</h1>
      <Carousel data={slides}/>
    </div>
  )
}

export default Gallery
