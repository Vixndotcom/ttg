import React from 'react'
import styles from '../../style'

const Tickets = () => {
  return (
    <section className={`${styles.flexCenter} flex justify-content-center align-items-center `}>
        <div className=''>
        <button className='mx-auto ticket-button '>
        <a href="https://shows.ng/event/Mentorship-session-for-teenagers-and-undergraduates-234" target="_blank" 
        rel="noopener noreferrer" className='neue-regular text-white text-[20px] shadoww'>Buy your Tickets here</a>
        </button>
        </div>
    </section>
  )
}

export default Tickets

