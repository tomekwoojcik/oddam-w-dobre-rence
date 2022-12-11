/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import './App.css'

function App () {
  return (
    <div className="App">
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Home}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
