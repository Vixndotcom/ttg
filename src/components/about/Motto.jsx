import React from 'react'
import styles from '../../style'
import { group, table } from '../../assets'

const Motto = () => {
  return (
    <section className={`${styles.flexStart}`}>
      <div className='neue-light md:w-[720px] xs:w-[470px] p-4 track'>
        <p className='mb-10' >
        <span className='text-[36px] text-black neue-bold '>Titogems Company Limited </span> is a purpose driven company aimed at
         building mindsets for <span className='text-[20px] neue-bold text-green'>success and purpose </span>  fulfilment.

 </p>

 <div className='mt-5 '>
          <img src={group} alt="" className='rounded-[4px]' />
        </div>


<p className='neue-light mt-10'><span className='text-[28px] neue-bold text-green'>The company </span>
 was birthed out of the need to groom young minds and adults alike in discovering who they really are and what makes
 them <span className='text-[20px] neue-bold text-green'>uniquely different </span>  from others.
</p>
<br />


<div className={`${styles.flexCenter} mt-5`}>
<img src={table} alt="" className='rounded-[4px]' />
</div>

<div className={`${styles.flexCenter} text-center boxxx  mt-4 flex flex-col mx-auto`}>
        <div >
         <h2 className='mt-4 mx-auto text-center neue-bold text-black font-bold underborder w-[200px] p-4'>OUR MOTTO</h2>
        </div> 
        <h2 className=' neue-bold text-[24px]   p-4 '>
      
        Success es imprescindible!
        </h2>
      </div>

        
      </div>
    </section>
  )
}

export default Motto
