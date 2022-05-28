import React from 'react'
import './App.css'
import NavBar from './components/navBar'
import Home from './components/home'
import Cart from './components/cart'
import Account from './components/account'
import About from './components/about'
// import Footer from './components/footer'

import { Routes, Route } from 'react-router-dom'
import { CommProvider } from './context/e-comState'

const App = () => {
  return (
    <CommProvider>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </CommProvider>
  )
}

export default App