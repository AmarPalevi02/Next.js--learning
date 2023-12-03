import React from 'react'
import Link from 'next/link';
import SButton from '../Button';
import { IoIosArrowBack } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const NavbarHome = () => {
    return (
        <div className='flex w-full justify-between items-center  mt-4 '>
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

            <nav className='flex pr-2'>
                <ul className='flex gap-2'>
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
                </ul>
            </nav>
        </div>
    )
}

export default NavbarHome