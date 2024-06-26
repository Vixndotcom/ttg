import React from 'react'
import { ceo, cert, group } from '../../assets'
import styles from '../../style'


const Ceo = () => {
  return (
    <section>
      <div className='neue-light md:w-[720px] xs:w-[470px] p-4 track mx-auto'>
      <p >
       
      <span className='text-[36px] neue-bold text-black '>Tolulope Abolade Bello </span> 
is a Nigerian certified management consultant with several years of experience as a customer relationship officer in a financial institution.

<div className='mt-4 text-center flex flex-col '>
  <img src={ceo} alt="mrs-tolu" className='rounded-[4px]' />
  <h2 className='mt-4 mx-auto text-center text[20px] neue-bold text-black font-bold'>Mrs Tolulope Abolade Bello</h2>
  <p className='font-medium neue-regular text-green mt-2'>CEO Titogems</p>

</div>
</p>

{/* second p */}
<div className={`${styles.flexCenter} mb-10 mt-5`}>
<div className='neue-light md:w-[720px] xs:w-[470px] p-8 pbox track'>
<p className='mt-1'>
<span className='text-[28px] neue-bold text-green'>She has been</span> on speaking platforms as a guest for 
<span className='text-[20px] neue-bold text-green'> insightful teachings </span> on motivational topics.

She is also a self motivated coach with a passion to grooming others to being the best version of themselves.
</p>
</div>
</div>
{/* secnd p */}






{/* img */}
        <div>
          <img src={cert} alt="" className='rounded-[4px]' />
        </div>
       
      </div>
    </section>
  )
}

export default Ceo
