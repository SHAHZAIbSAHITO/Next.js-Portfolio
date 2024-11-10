import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/image.png)] bg-cover'
    style={{backgroundSize: "20%", backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2-[calc(150vh-100px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-down">I'm</p>
            <p data-aos="zoom-in-down">Shahzaib</p>
            <p data-aos="zoom-in-down">Sahito</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
