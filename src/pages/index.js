import React from 'react'
import NavbarHome from '@/components/Home/Navbar'
import Title from '@/components/Title'
import HistoryPlay from '@/components/Home/HistoryPlay'

const Home = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className="">
                <NavbarHome />
                <div className="px-2 mt-5 h-[1000px]">
                    <Title>Selamat Malam</Title>
                    <HistoryPlay />
                </div>
            </div>
        </>
    )
}

export default Home

// export async function getServerSideProps(context) {
//     const res = await fetch(`https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks`, {
//         headers: {
//             Authorization: `Bearer ${process.env.REFRESH_TOKEN}`
//         }
//     }).then(response => response.json())

//     console.log(res)
//     return {
//         props: { data: res },
//     };
// }