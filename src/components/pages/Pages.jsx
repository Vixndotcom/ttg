import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '../Navbar'
import Home from '../home/Home'
import About from '../about/About'
import Footer from '../Footer'
import styles from '../../style'



const LazyHome = React.lazy(() => import('../home/Home'))
const LazyAbout = React.lazy(() => import('../about/About'))


const pages = () => {
  return (
    <>
    <Router>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route exact path='/' element={<React.Suspense fallback={<div>Loading...</div>} ><LazyHome /></React.Suspense>} />
        <Route exact path ='/about' element={<React.Suspense fallback={<div>Loading... </div>}><LazyAbout /></React.Suspense>} />
        
            
        
      </Routes>

        
      <div className={`bg-footer  ${styles.paddingX} ${styles.flexStart} mt-10 `}>
        <div className={`${styles.boxWidth}`}>
          
    
           < Footer/> 
      
        </div>
      </div> 

    </Router>
    </>
  )
}

export default pages
