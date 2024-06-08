import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className=' bg-hero'> 
    <h1 className='neue-bold md:text-[48px] text-white text-center justify-content-center mx-auto p-8 track'>
     <div className=' mt-20 shadow '>BECOME THE LEADER</div>
     <div className='shadow mt-4'>YOU WERE BORN</div>
     <div className='shadow mt-4'>TO BE</div>
    </h1>
    <button className='button text-[28px] text-white text-center mx-auto'>
        <Link to ='/about'>Get Started
        </Link>
    </button>
    </div>
  )
}

export default Hero
