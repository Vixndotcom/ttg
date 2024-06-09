import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../../assets'


const Hero = () => {
  return (
    <div className=' bg-hero'> 
    <h1 className='neue-bold text-[36px] text-white text-center justify-content-center mx-auto p-8 track'>
     <div className=' mt-20 shadow '>BECOME THE LEADER</div>
     <div className='shadow mt-4'>YOU WERE BORN</div>
     <div className='shadow mt-4'>TO BE</div>
    </h1>
    <button className='button text-[20px] text-white text-center mx-auto neue-regular flex flex-row '>
        <Link to ='/about' className='neue-regular text-center flex flex-row  '>Get Started  
        </Link>
        <img src={arrow} alt="" className=' w-[10%] mx-4 mb-3'/>
    </button>
    </div>
  )
}

export default Hero
