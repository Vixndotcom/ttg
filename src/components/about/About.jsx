import React from 'react'
import styles from '../../style'
import AboutHead from './AboutHead'
import Motto from './Motto'
import Ceo from './Ceo'


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


    <div className={`${styles.flexStart} `}>
  <div className={`${styles.boxWidth}`}>
    <h2 className='text-black mt-10 mb-4 text-[28px] p-2 text-center neue-bold'>
        Our Team
        </h2> 

    <Ceo />
  </div>
    </div>



    
    </div>
    


  )
}

export default About
