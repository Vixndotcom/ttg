import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../../assets'
import styles from '../../style'

const Hero = () => {
  return (
    <section className={`${styles.paddingY} `}> 
    <h1 className='neue-bold text-[36px] text-white text-center justify-content-center mx-auto p-8 track  '>
     <div className=' mt-20 shadow '>DISCOVER YOUR POTENTIAL,</div>
     <div className='shadow mt-4'>SHAPE YOUR</div>
     <div className='shadow mt-4'>FUTURE</div>
    </h1>
    <button className='button text-[20px] text-white text-center mx-auto neue-regular flex flex-row  '>
        <Link to ='/register' className='neue-regular text-center mx-8 flex flex-row cursor-pointer '>Register Today!
        <img src={arrow} alt="" className=' w-[12%] mx-4 mb-3'/>
        </Link>
        
    </button>
    </section>
  )
}

export default Hero
