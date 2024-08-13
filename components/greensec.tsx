import React from 'react'
import { Button } from './ui/button'

function Greensec() {
  return (
    <div className='bg-lime-500 text-black flex justify-center items-center flex-col mt-10 p-6 sm:p-10 md:p-20'>
      <div className='text-lg sm:text-xl md:text-3xl font-semibold text-center w-full max-w-[90%] md:max-w-[80%]'>
        Looking for reliable web3 experts for your project?
      </div>
      <div className='text-sm sm:text-base md:text-2xl font-semibold mt-4 sm:mt-6 md:mt-8'>
        Dive into a free consultation call
      </div>
      <Button className='rounded-full mt-3 sm:mt-4 md:mt-5'>
        Schedule Now
      </Button>
    </div>
  )
}

export default Greensec
