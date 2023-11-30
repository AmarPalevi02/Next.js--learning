import React from 'react'
import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='px-5 py-5 bg-primary'>
      <ul className='flex justify-between '>
        <div className="flex items-center gap-2">
          <Image src={logo}
            alt='logo'
            className='w-[60px] h-lg'
          />
          <h1 className="xs:hidden sm:block text-bold">MARZKYY</h1>
        </div>
        <nav className=' text-lg cursor-pointer items-center xs:hidden sm:flex gap-5'>
          <Link href={'/navbar/home'}>
            <li>Home</li>   
          </Link>
          <Link href={'/navbar/about'}>
            <li>About</li>
          </Link>
          <li>Licency</li>
          <li>Contact Us</li>
        </nav>
      </ul>
    </div>
  )
}

export default Navbar