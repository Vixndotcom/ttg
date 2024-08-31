import React from 'react'
import styles from '../../style'
import { group, table } from '../../assets'

const Motto = () => {
  return (
    <section className=''>
      <div className='neue-light md:w-[720px] xs:w-[470px] p-4 track'>
        <p className='mb-10 md:w-[720px] xs:w-[470px] ' >
        <span className='text-[36px] text-black neue-bold '>Titogems <br /> Company Limited </span> is a purpose driven company aimed at
         building mindsets for <span className='text-[20px] neue-bold text-green'>success and purpose </span>  fulfilment.

 </p>

 <div className='mt-5 '>
          <img src={group} alt="" className='rounded-[4px]' />
        </div>

        
{/* new div */}
        <div className={`${styles.flexCenter} mb-10 mt-5`}>
<div className='neue-light md:w-[720px] xs:w-[470px] p-8 pbox track'>
<p className='mt-1'><span className='text-[28px] neue-bold text-green'>The company </span>
 was birthed out of the need to groom young minds and adults alike in discovering who they really are and what makes
 them <span className='text-[20px] neue-bold text-green'>uniquely different </span>  from others.
</p>
</div>
</div>





        
      </div>
    </section>
  )
}

export default Motto
