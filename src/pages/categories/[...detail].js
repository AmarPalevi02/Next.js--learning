import React from 'react'
import { useRouter } from 'next/router'

const DetailCatergories = () => {
    const route = useRouter()
    console.log('route', route)
  return (
    <div>DetailCatergories</div>
  )
}

export default DetailCatergories