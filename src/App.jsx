import React from 'react'
import Navbar from './components/navbar/Navbar'
 import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/services'  element={<Service/>} />
        <Route path='/contact'  element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App