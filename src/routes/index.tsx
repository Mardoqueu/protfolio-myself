
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import { Home } from '../pages/Home'

const Rotas = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>    
    </Router>
  )
}

export default Rotas
