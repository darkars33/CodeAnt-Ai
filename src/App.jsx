import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Saas from './pages/Saas'
import SelfHosted from './pages/SelfHosted'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)
  const {user} = useUser()
  const login =  user ? true : false
 console.log(user)
  

  return (
    <>
      <Routes>
        <Route path='/' element={login ? <Home /> : <Navigate to="/saas"/>} />
        <Route path='/saas' element={!login ? <Saas /> : <Navigate to="/" />} />
        <Route path='/self-hosted' element={<SelfHosted />} />
      </Routes>
    </>
  )
}

export default App
