import React, { useState } from 'react'
import Total from './Total'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import Rules from './Rules'

const GamePlay = () => {
  const  [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const  [error, setError] = useState('')
  const  [showRules, setshowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    const num = Math.random() * (max - min) + min;
    console.log(Math.floor(num))
    return Math.floor(num)
}

    const roleDice = () => {
      if (!selectedNumber) {
        setError("You've not selected any number") 
        return;
      } 

    const randomNumber = generateRandomNumber(1,7)
    setCurrentDice((prev) => randomNumber)


    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev -2)
    }

    setSelectedNumber(NaN) 
}

  return (
    <main className='flex flex-col justify-end'>
      <section className='min-w-fit mt-12 mx-20 flex flex-row justify-between'>
        <Total
        score={score}/>
        <NumberSelector
        setError = {setError}
        error  = {error}
        selectedNumber= {selectedNumber}
        setSelectedNumber={setSelectedNumber} />
      </section>

      <RoleDice
      currentDice={currentDice}
      roleDice={roleDice}
      />

      <div className='flex flex-col items-center'>
      <button
        onClick={() => setScore(0)}
        className='font-poppins mt-2 px-14 rounded-md py-2 border-2
         border-black font-bold hover:bg-black hover:text-white transition  duration-200 ease-in'>Reset Score</button>

        <button className='font-poppins mt-6 mb-2 px-14 rounded-md py-2 border-2
         border-black text-white hover:text-black hover:bg-white transition  duration-200 ease
         -in bg-black font-medium
         '
         onClick={() => setshowRules((prev) => !prev)}> {showRules? "Hide " : "Show "} Rules</button>
      </div>

      <div className='flex justify-center'>
       {showRules && <Rules/>}
      </div>
    </main>
  )
}

export default GamePlay