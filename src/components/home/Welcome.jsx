import React from 'react'
import styles, { layout } from '../../style'
import { carl, davinci } from '../../assets'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <section className={`${layout.section} mt-2`}>
      <div className={`${layout.sectionInfo}`}> 
        <h2 className='text-[40px] text-white neue-bold shadoww'>
        Guidance for Every Journey, Support for Every Step
        </h2>
        <p className='neue-white w-[370px] py-4'>
We are out to ensure that everyone who takes a seat under our auspicious tutelage is fired up and juiced up from
 within to be the best they can ever be.</p>
 
<p className='neue-white w-[400px] py-4'>

  Knowledge is power!
</p>
  
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
