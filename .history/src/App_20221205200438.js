/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div className="App">
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route path='/'></Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
