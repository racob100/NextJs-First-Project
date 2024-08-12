import React from 'react'
import { Button } from './ui/button'

function Greensec() {
  return (
    <div className='bg-lime-500 text-black flex justify-center items-center flex-col h-56 mt-20 p-40'>
      <div className='text-xl w-full max-w-[80%] md:text-4xl font-semibold'>Looking for reliable web3 experts for your project?</div>
      <div className='sm:text-sm md-text-2xl font-semibold mt-8'>Dive into a free consultation call</div>
      <Button className='rounded-full mt-3'>Schedule Now</Button>
    </div>
  )
}

export default Greensec
