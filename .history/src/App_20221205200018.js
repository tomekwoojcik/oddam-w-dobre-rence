/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router'
import './App.css'

function App () {
  return (
    <div className="App">
      <Outlet />
      
    </div>
  )
}

export default App
