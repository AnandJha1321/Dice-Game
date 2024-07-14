import React from 'react'

const Total = ( {score}) => {
  return (
    <div className='flex flex-col'>
        <p className='font-bold text-9xl pl-10'>
          {score}</p>
        <p className='font-bold text-3xl whitespace-nowrap '>Total Score</p>
    </div>  
  
)
}

export default Total