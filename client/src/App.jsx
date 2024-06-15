import { useState } from 'react'
import './App.css'
import ProductsList from './components/ProductsList'
import NavBar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
