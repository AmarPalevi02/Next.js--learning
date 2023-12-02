import React from 'react'
import Link from 'next/link'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import { GrSatellite } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='px-5 py-5 bg-primary w-[240px]'>
      <ul className='flex justify-between '>
        <nav className='text-gray text-lg cursor-pointer xs:hidden sm:flex gap-5 flex-col '>
          <Link href={'/navbar/home'}>
            <li className='flex items-center gap-3 font-semibold '>
              <GoHome className='text-[25px]' />
              <p className='text-[17px]'>
                Home
              </p>
            </li>
          </Link>
          <Link href={'/navbar/about'}>
            <li className='flex items-center gap-3 font-semibold'>
              <CiSearch className='text-[25px]' />
              <p className='text-[17px]'>
                Search
              </p>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='flex items-center gap-3 font-semibold'>
              <BiLibrary className='text-[25px]' />
              <p className='text-[17px]'>
                Your Library
              </p>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='flex items-center gap-3 font-semibold'>
              <GrSatellite className='text-[25px]' />
              <p className='text-[17px]'>
                Stream
              </p>
            </li>
          </Link>
        </nav>
      </ul>

      <nav className='text-gray mt-[36px] '>
        <ul>
          <Link href={'/'}>
            <li className='flex items-center gap-3 font-semibold mb-5'>
              <div className="bg-gray1 rounded-sm w-[25px] h-[25px] flex items-center text-center">
                <FaPlus className='text-bacground text-[16px] font-bold text-center w-full' />
              </div>
              <p className='text-17'>
                Create Playlist
              </p>
            </li>
          </Link>
          <Link href={'/'}>
            <li className='flex items-center gap-3 font-semibold mb-5'>
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-sm w-[25px] h-[25px] flex items-center text-center">
                <FaHeart className='text-gray text-[16px] font-bold text-center w-full' />
              </div>
              <p className='text-17'>
                Like Songs
              </p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar