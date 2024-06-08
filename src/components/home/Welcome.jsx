import React from 'react'
import styles, { layout } from '../../style'
import { carl, davinci } from '../../assets'

const Welcome = () => {
  return (
    <section className={`${layout.section} mt-2`}>
      <div className={`${layout.sectionInfo}`}> 
        <h2 className='text-[40px] text-black capitalize'>
          POWERFUL, POSITIVE CHANGE FOR GROWTH
        </h2>
        <p className='neue-light w-[420px] p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quibusdam dolorum, quas ipsa quasi 
        consequuntur facilis laboriosam voluptates alias perferendis.</p>
    </div>

    <div className={`${layout.sectionImg}`}>
        <div className='flex flex-row'>
          <img src={davinci} alt="" className='w-[50%]'/>
          <img src={carl} alt="" className='w-[50%]'/>
        </div>
        </div>
        </section>
  )
}

export default Welcome
