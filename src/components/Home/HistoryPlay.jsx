import React from 'react'
import { logo } from '@/assets'
import Image from 'next/image'

const HistoryPlay = () => {
    return (
        <div className='w-full flex justify-between '>
            <div className="w-[240px] h-[45px] flex bg-zinc-700 items-center gap-2 rounded-lg">
                <div className="h-full w-[50px] flex ">
                    <Image
                        src={logo} alt=""
                        className='object-contain  '
                    />
                </div>
                <p className='font-bold text-white'>Play Name</p>
            </div>
            <div className="w-[240px] h-[45px] flex bg-zinc-700 items-center gap-2 rounded-lg">
                <div className="h-full w-[50px] flex ">
                    <Image
                        src={logo} alt=""
                        className='object-contain  '
                    />
                </div>
                <p className='font-bold text-white'>Play Name</p>
            </div>
            <div className="w-[240px] h-[45px] flex bg-zinc-700 items-center gap-2 rounded-lg">
                <div className="h-full w-[50px] flex ">
                    <Image
                        src={logo} alt=""
                        className='object-contain  '
                    />
                </div>
                <p className='font-bold text-white'>Play Name</p>
            </div>
            <div className="w-[240px] h-[45px] flex bg-zinc-700 items-center gap-2 rounded-lg">
                <div className="h-full w-[50px] flex ">
                    <Image
                        src={logo} alt=""
                        className='object-contain  '
                    />
                </div>
                <p className='font-bold text-white'>Play Name</p>
            </div>
        </div>
    )
}

export default HistoryPlay