import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import './style/global.css'

const Home = React.lazy(() => import('./views/Home'))

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default App;
