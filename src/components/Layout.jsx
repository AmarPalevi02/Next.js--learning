import React from 'react'
import Navbar from './Navbar'

const LayoutPage = ({ children }) => {
  return (
    <div className='flex bg-bacground h-[100vh]'>
      <Navbar />
      <main className='px-5'>
        {children}
      </main>
    </div>
  )
}

export default LayoutPage