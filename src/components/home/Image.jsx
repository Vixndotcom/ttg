import React from 'react'
import styles from '../../style'
import { arrow, bruce } from '../../assets'
import { Link } from 'react-router-dom'

const Image = () => {
  return (
    <section className={`${styles.flexCenter} mt-10 flex flex-col `}>
        <div className='mb-10'>
      <div className='w-[75%] h-[75%] mx-auto mt-10 '>
        <img src={bruce} alt="" />
      </div>
      
      <button className='button text-[20px] text-white text-center mx-auto neue-regular flex flex-row mb-20 '>
        <Link to ='/about' className='neue-regular text-center flex flex-row  '>Join Today!
        </Link>
        <img src={arrow} alt="" className=' w-[10%] mx-4 mb-3'/>
    </button>
    </div>
    </section>
  )
}

export default Image
