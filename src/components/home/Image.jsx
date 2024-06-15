import React from 'react'
import styles from '../../style'
import { arrow, bruce } from '../../assets'
import { Link } from 'react-router-dom'
import Works from './Works'

const Image = () => {
  return (
    <section className={`${styles.flexCenter} mt-10 flex flex-col `}>
        <div className='mb-10'>
      <div className='w-[75%] h-[75%] mx-auto mt-10 '>
        <img src={bruce} alt="" />
      </div>
    
    
    </div>
    </section>
  )
}

export default Image
