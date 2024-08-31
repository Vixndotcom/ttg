import React from 'react'
import styles from '../../style'
import Hed from './Hed'
import Training from './Training'
import Awards from './Award'
import Conferences from './Conferences'
import Seminars from './Seminars'
import Workshops from './Workshops'
import Outreach from './Outreach'
import Global from './Global'

function Services () {
  return (
    <div className='w-full overflow-hidden '>
      <div className={`${styles.flexStart} bg-service`}>
       <div className={`${styles.boxWidth} bg-doing`}>
        <Hed />
       </div>
      </div>
        
      < div className={` ${styles.flexCenter} mx-auto  mt-20`}>
      
      <div className={`${styles.boxWidth}  `}>

        <Training />
    </div>
    </div>
        
      < div className={`${styles.flexCenter}  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}>

        <Awards />
    </div>
    </div>

      < div className={` ${styles.flexCenter}  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}>

        <Conferences />
    </div>
    </div>

      < div className={` ${styles.flexCenter}  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}>

        <Seminars />
    </div>
    </div>

      < div className={` ${styles.flexCenter}  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}>

        <Workshops />
    </div>
    </div>

      < div className={` ${styles.flexCenter}  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}>

        <Outreach />
    </div>
    </div>

      < div className={`${styles.flexCenter} mb-20  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}>

        <Global />
    </div>
    </div>






    </div>
  )
}

export default Services