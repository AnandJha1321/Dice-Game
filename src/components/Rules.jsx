import React from 'react'

const Rules = () => {
  return (
    <div  className="bg-[#F5EBEB] p-2 max-w-lg mb-2">
        <h2 className='font-semibold text-lg'>How to play the game</h2>
        <div>
            <p>1. Select any number</p>
            <p>
                2. After clicking on dice if selected numbers is equal to dice 
                number you will get same point as dice {" "}
            </p>
            <p>3. if you get wrong guess then 2 point wil be deducted</p>
        </div>
    </div>
  )
}

export default Rules