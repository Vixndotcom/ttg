import React from 'react'
import styles from '../../style'
import { one, two } from '../../assets'

const List = () => {
  return (
   <section className={`${styles.flexCenter} mx-auto`}>
    <div className={`${styles.flexCenter} flex flex-row gap-2 mx-auto `}>
     <img src={one} alt="" className='w-[30%] h-[33%]'/>
     <img src={two} alt="" className='w-[55%] h-[60%]'/>
    </div>
   </section>
  )
}

export default List