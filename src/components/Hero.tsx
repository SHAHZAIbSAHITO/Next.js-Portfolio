import React from 'react'
import Navbar from './Navbar'
import '../app/styles/hero.css';
const Hero = () => {
  return (
    <div id='hero' 
    className='hero-container'
    style={{backgroundSize: "20%", backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar />
      <div className='hero-container'>
        <div className='hidden lg:block'></div>
        <div className='hero-4'>
          <div className='hero-text'>
            <div className='hero-msin'>
            <p data-aos="zoom-in-down">I'm</p>
            <p data-aos="zoom-in-down">Shahzaib</p>
            <p data-aos="zoom-in-down">Sahito</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
