import React from 'react'
import NavbarHome from '@/components/Home/Navbar'
import Title from '@/components/Title'
import HistoryPlay from '@/components/Home/HistoryPlay'

const Home = ({ data }) => {
    console.log(data)
    return (
        <>
            <div className="">
                <NavbarHome />
                <div className="px-2 mt-5 h-[1000px]">
                    <Title>Selamat Malam</Title>
                    <HistoryPlay datas={data} />
                </div>
            </div>
        </>
    )
}

export default Home

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.spotify.com/v1/shows?market=ID&ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ`, {
        headers: {
            Authorization: `Bearer ${process.env.REFRESH_TOKEN}`
        }
    }).then(response => response.json())

   const response = res.shows;
    return {
        props: { data: response },
    };
}