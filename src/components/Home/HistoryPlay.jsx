import React from 'react'
import { logo } from '@/assets'
import Image from 'next/image'

const HistoryPlay = ({ datas }) => {

    return (
        <div className='w-full flex justify-between '>
            {datas.map((item, i) => {
                return (
                    <div className="w-[240px] h-[45px] flex bg-zinc-700 items-center gap-2 rounded-lg" key={i}>
                        <div className="h-full w-[50px] flex ">
                            {item.images.map((image, i) => (
                                <Image
                                    key={i = 0}
                                    src={image} alt={'as'}
                                    className='object-contain '
                                />
                            ))}
                        </div>
                        <p className='font-bold text-white'>{item.name}</p>
                    </div>
                )
            })}
            <div className="w-[240px] h-[45px] flex bg-zinc-700 items-center gap-2 rounded-lg">
                <div className="h-full w-[50px] flex ">
                    <Image
                        src={logo} alt=""
                        className='object-contain  '
                    />
                </div>
                <p className='font-bold text-white'>Play Name</p>
            </div>
            {/* <div className="w-[240px] h-[45px] flex bg-zinc-700 items-center gap-2 rounded-lg">
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
            </div> */}
        </div>
    )
}

export default HistoryPlay