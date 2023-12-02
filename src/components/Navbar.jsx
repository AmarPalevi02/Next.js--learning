import React from 'react'
import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='px-5 py-5 bg-primary'>
      <ul className='flex justify-between '>
        <nav className=' text-lg cursor-pointer items-center xs:hidden sm:flex gap-5 flex-col '>
          <Link href={'/navbar/home'}>
            <li>Home</li>   
          </Link>
          <Link href={'/navbar/about'}>
            <li>Search</li>
          </Link>
          <li>Licency</li>
          <li>Contact Us</li>
        </nav>
      </ul>
    </div>
  )
}

export default Navbar