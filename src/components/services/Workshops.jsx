import React from 'react'
import { training, workshop } from '../../assets'

const Workshops = () => {
  return (
    <section className=''>
           <div className='text-start boxx p-4 '>
        <div>
            <img src={workshop} className='w-[72px] h-[72px]'  />
        </div>
        <h2 className=' neue-lightt mt-4 text-[20px] p-4 flex flex-row '><span> 
            <div className='w-[24px] h-[24px]  bg-white mr-2'>
      
      </div>
      </span> 
      Workshops
        </h2>
      </div>
    </section>
  )
}

export default Workshops