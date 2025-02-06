import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUpForm />
    <Authenticate />
    </>
  )
}

export default App
