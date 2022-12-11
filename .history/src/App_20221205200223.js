/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div className="App">
      <Outlet />
      <BrowserRouter>
        <Route></Route>

      </BrowserRouter>
    </div>
  )
}

export default App
