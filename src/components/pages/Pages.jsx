import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '../Navbar'
import Home from '../home/Home'
import About from '../about/About'


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
    </Router>
    </>
  )
}

export default pages
