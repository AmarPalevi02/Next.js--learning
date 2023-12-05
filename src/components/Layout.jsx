import React from 'react'
import Navbar from './Navbar'
import Play from './Play'

const LayoutPage = ({ children }) => {
  return (
    <div className='flex bg-bacground h-[100vh] w-[100vw] relative min-w-[100vw] overflow-x-hidden'>
      <Navbar />
      <div className='w-[calc(100vw-240px)]'>
        {children}
      </div>
      <div className="fixed bottom-0 ">
        <Play />
      </div>
    </div>
  )
}

export default LayoutPage