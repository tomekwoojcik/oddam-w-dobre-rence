/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import './App.css'
import LogIn from './pages/logIn/logIn'
import Register from './pages/register/register'

function App () {
  return (
    <div className="App">
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='logowanie' element={<LogIn />} />
          <Route path='rejestracja' element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
