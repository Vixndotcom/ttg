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



const LazyHome = React.lazy(() => import('../home/Home'))
const LazyAbout = React.lazy(() => import('../about/About'))
const LazyServices = React.lazy(() => import('../services/Services'))
const LazyContact = React.lazy(() => import('../contact/Contact'))


const pages = () => {
  return (
    <>
    <Router>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route exact path='/' element={<React.Suspense fallback={<div><Loader/></div>} ><LazyHome /></React.Suspense>} />
        <Route exact path ='/about' element={<React.Suspense fallback={<div><Loader/> </div>}><LazyAbout /></React.Suspense>} />
        <Route exact path ='/services' element={<React.Suspense fallback={<div><Loader/> </div>}><LazyServices /></React.Suspense>} />
        <Route exact path ='/contact' element={<React.Suspense fallback={<div><Loader/> </div>}><LazyContact /></React.Suspense>} />
        
            
        
      </Routes>

        
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
