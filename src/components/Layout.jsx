import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const LayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='px-5'>
        {children}
      </main>
      <Footer className=""/>
    </div>
  )
}

export default LayoutPage