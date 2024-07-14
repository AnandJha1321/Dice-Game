import React, { useState } from 'react'

const RoleDice = ({currentDice, roleDice}) => {

   


  return (
    <div className='flex flex-col items-center'>
        <div
        onClick={roleDice}>
        <img 
        src= {`src/assets/dice_${currentDice}.png`} alt="" />
        </div>
        <p className='my-4 cursor-pointer font-semibold font-poppins text-2xl'>Click on Dice to roll</p>
    </div>
  )
}

export default RoleDice