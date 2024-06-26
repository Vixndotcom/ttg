import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '../Navbar'
import Home from '../home/Home'
import About from '../about/About'
import Footer from '../Footer'
import styles from '../../style'
import Loader from '../Loader'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import Register from '../contact/Register'
import Top from '../home/Top'
import Tickets from '../home/Tickets'



const LazyHome = React.lazy(() => import('../home/Home'))
const LazyAbout = React.lazy(() => import('../about/About'))
const LazyServices = React.lazy(() => import('../services/Services'))
const LazyContact = React.lazy(() => import('../contact/Contact'))
const LazyRegister = React.lazy(() => import('../contact/Register'))


const pages = () => {
  return (
    <>
    <Router>
     
    <div className={` ${styles.flexCenter} w-full overflow-hidden  `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

 

      <Routes>
        <Route exact path='/' element={<React.Suspense fallback={<div><Loader/></div>} ><LazyHome /></React.Suspense>} />
        <Route exact path ='/about' element={<React.Suspense fallback={<div><Loader/> </div>}><LazyAbout /></React.Suspense>} />
        <Route exact path ='/services' element={<React.Suspense fallback={<div><Loader/> </div>}><LazyServices /></React.Suspense>} />
        <Route exact path ='/contact' element={<React.Suspense fallback={<div><Loader/> </div>}><LazyContact /></React.Suspense>} />
        <Route exact path ='/register' element={<React.Suspense fallback={<div><Loader/> </div>}><LazyRegister /></React.Suspense>} />
        
            
        
      </Routes>
      <div className={`${styles.boxWidth}  `}>
        <Top />
      </div>

      <div className='bg-tickets w-[100%] h-[200px] mb-1 mt-1'>
  <Tickets/>
</div>
      <div className={`bg-footer  ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth}`}>
          
         
           < Footer/> 
      
        </div>
      </div> 

    </Router>
    </>
  )
}

export default pages
