import React from 'react'
import styles from '../../style'
import AboutHead from './AboutHead'
import Motto from './Motto'


function About ()  {
  return (
    <div className='bg-white w-full overflow-hidden'>
    <div className={`${styles.flexStart} bg-about`}>
  <div className={`${styles.boxWidth}`}>
    <AboutHead />
  </div>
    </div>


    <div className={`${styles.flexStart} `}>
  <div className={`${styles.boxWidth}`}>
    <Motto />
  </div>
    </div>



    
    </div>
    


  )
}

export default About
