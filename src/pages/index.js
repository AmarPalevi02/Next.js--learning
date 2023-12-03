import React from 'react'
import NavbarHome from '@/components/Home/Navbar'

const Home = ({ data }) => {
    // console.log(data)
    return (
        <>
            <NavbarHome />
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