import React from 'react'
import Link from 'next/link';
import SButton from '../Button';
import { IoIosArrowBack } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const NavbarHome = () => {
    return (
        <div className='flex  justify-between items-center  mt-4 '>
            <div className="flex gap-3">
                <Link href={'/wwu'}>
                    <div className="bg-[#180602] w-[30px] h-[30px] rounded-full flex text-center items-center ">
                        <IoIosArrowBack className='text-white w-full text-center' />
                    </div>
                </Link>
                <Link href={'/www'}>
                    <div className="bg-[#180602] w-[30px] h-[30px] rounded-full flex text-center items-center ">
                        <IoIosArrowBack className='text-white w-full text-center rotate-180' />
                    </div>
                </Link>
            </div>

            <nav className='flex pr-3'>
                <ul className='flex gap-2 items-center'>
                    <li>
                        <SButton
                            className={'text-black bg-white px-3 py-1 rounded-lg'}
                        >
                            Jelajah Premium
                        </SButton>
                    </li>
                    <li>
                        <SButton
                            className={'text-white bg-[#240903] px-3 py-1 rounded-lg flex items-center gap-1'}
                        >
                            <FaRegArrowAltCircleDown />
                            Pasang Aplikasi
                        </SButton>
                    </li>
                    <li>
                        <Link href="/" >
                            <div className="w-[30px] h-[30px] flex items-center rounded-full bg-zinc-700">
                                <IoIosNotificationsOutline className='text-white text-center w-full' />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <div className="w-[30px] h-[30px] flex items-center rounded-full bg-zinc-700">
                                <FaRegUser  className='text-white text-center w-full' />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarHome