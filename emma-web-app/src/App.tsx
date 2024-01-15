import React from 'react'
import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import {Routes, Route} from 'react-router-dom'
 
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
   
  )
}

export default App;