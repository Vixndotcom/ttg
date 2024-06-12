import React from 'react'
import { events } from '../../assets'

const Global = () => {
  return (
    <section className=''>
           <div className='text-start boxx p-4 '>
        <div>
            <img src={events} className='w-[72px] h-[72px]'  />
        </div>
        <h2 className=' neue-lightt mt-4 text-[20px] p-4 flex flex-row '><span> 
            <div className='w-[24px] h-[24px]  bg-white mr-2'>
      
      </div>
      </span> 
      Global Events
        </h2>
      </div>
    </section>
  )
}

export default Global