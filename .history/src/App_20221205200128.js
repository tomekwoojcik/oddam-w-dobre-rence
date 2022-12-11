/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Route } from 'react-router'
import './App.css'

function App () {
  return (
    <div className="App">
      <Outlet />
      <Route></Route>
    </div>
  )
}

export default App
