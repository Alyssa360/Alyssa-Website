import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/Home/home'
import Navbar from './components/NavBar/navbar'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Navbar/>
       <Home/>
       </BrowserRouter>
      
    </div>
  )
}

export default App
