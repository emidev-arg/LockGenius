import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
