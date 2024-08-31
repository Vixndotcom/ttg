import React from 'react'
import { mead } from '../../assets'
import styles from '../../style'

const Image = () => {
  return (
    <section className={`${styles.flexCenter } mt-5 mb-5 mx-auto`}>
      <div className='w-[75%] h-[75%] mx-auto'>
        <img src={mead} alt="" />
      </div>
    </section>
  )
}

export default Image
