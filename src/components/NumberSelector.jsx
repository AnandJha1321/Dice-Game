import React, { useState } from 'react'

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {
    const array = [1,2,3,4,5,6]

    const numberSelectorHandler = (value) => {
      setSelectedNumber(value)    
      setError("")
    }

  return (

    <div className='flex flex-col gap-4 items-end'>
      <p className=' absolute top-[20px] font-bold text-red-600 text-xl'>{error}</p>
       <div className='flex flex-row gap-2 mt-4'>
          {array.map((value, i) => (
              <div
              onClick = {() => numberSelectorHandler(value)}
              key={i}
              className={` ${selectedNumber === value ? 'bg-black text-white' : 'bg-white'} cursor-pointer border-2 border-black px-5 py-3 h-14 font-bold text-[20px]`}>
                {value}</div>              
          ))}

          </div>

          <h2 className='font-bold font-poppins text-2xl'>Select Number</h2>
    </div>


  )
}

export default NumberSelector