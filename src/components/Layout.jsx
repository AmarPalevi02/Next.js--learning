import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const LayoutPage = ({ children }) => {
  return (
    <div className='flex bg-bacground h-[100vh]'>
      <Navbar />
      <main className='px-5'>
        {children}
      </main>
      <Footer className=""/>
    </div>
  )
}

export default LayoutPage