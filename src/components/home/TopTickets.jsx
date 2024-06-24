import React from 'react'
import styles from '../../style'

const TopTickets = () => {
  return (
    <section className={`${styles.flexCenter} flex justify-content-center align-items-center `}>
        <div className=''>
        <button className='mx-auto ticket-button '>
             <p className='neue-regular text-white text-[20px] shadoww'>Buy Tickets Here</p>
        </button>
        </div>
    </section>
  )
}

export default TopTickets