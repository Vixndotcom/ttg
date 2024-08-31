import React from 'react'
import styles from '../../style'
import { table } from '../../assets'

const Table = () => {
  return (
   <section className={`${styles.flexCenter} flex flex-col mx-auto`}>


<div className={`${styles.flexCenter} mt-5 mx-auto md:w-[720px] xs:w-[470px] p-4 track `}>
<img src={table} alt="" className='rounded-[4px]' />
</div>

<div className='text-center boxxx  mt-4 mb-10'>
        <div >
         <h2 className='mt-4 mx-auto text-center neue-bold text-black font-bold underborder w-[200px] p-4'>OUR MOTTO</h2>
        </div> 
        <h2 className=' neue-bold text-[24px]   p-4 '>
      
   "Success <br /> es <br /> imprescindible "
        </h2>
      </div>

   </section>
  )
}

export default Table