import React, { useState } from 'react'
import Start from './components/Start'
import GamePlay from './components/GamePlay'

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleCompo = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
        {isGameStarted ? <GamePlay/> : <Start 
        toggle = {toggleCompo}/> }
    </>
  )
}

export default App