import React from 'react'
import About from './container/About/About'


import Skills from './container/Skills/Skills';
import { Navbar } from './components/Navbar/Navbar'
import './App.scss'
import Header from './container/Header/Header'
import Work from './container/Work/Work'
import Footer from './container/Footer/Footer';


export const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  )
}
