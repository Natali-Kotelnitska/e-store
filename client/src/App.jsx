import { useState } from 'react'
import './App.css'
import ProductsList from './components/ProductsList'

function App() {

  return (
    <>
      <div className='app'>
        <h1>React on Rails Back</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <ProductsList />
      </div>
    </>
  )
}

export default App
