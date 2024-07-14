import React from 'react'

const Start = ({toggle}) => {
  return (
    <>
      <section className='flex md:flex-row p-20 justify-between items-center'>
        <img src="src/assets/dice.png" alt="" />

        <div className='flex flex-col items-start'> 
          <h1 className='font-bold font-poppins text-8xl whitespace-nowrap'>DICE GAME</h1>
           <button 
           onClick={toggle}
           className='bg-black text-white font-poppins px-14 rounded-md py-1 flex-nowrap mt-3
            text-end font-semibold border border-black border-transparent hover:bg-white hover:border-black
            hover:text-black transition duration-300 ease-in'>Play Now</button>
        </div>
      </section>
    </>

  )
}

export default Start