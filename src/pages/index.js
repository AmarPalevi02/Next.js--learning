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
    const res = await fetch('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ID', {
        headers: {
            Authorization: `Bearer ${process.env.REFRESH_TOKEN}`
        }
    }).then(response => response.json())

   const response = res.albums;
    return {
        props: { data: response },
    };
}