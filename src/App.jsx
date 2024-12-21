import { useState } from 'react'
import logo from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <img src={logo} alt="logo of codeant ai" className='fill-white'  />
    </>
  )
}

export default App
