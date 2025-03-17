import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData()
    //const [data, setData]=useState([])
    // useEffect(()=>
    //     {
    //         fetch('https://api.github.com/users/Hiteshchoudhary')
    //         .then(response=>response.json())
    //         .then(data=>{
    //             console.log(data)
    //             setData(data)
    //         })
    //     },[])
    return (
        <div className='text-3xl bg-orange-500 text-center text-white p-4'>GitHub followers: {data.followers}
        <img src={data.avatar_url} alt='git-pic' width={300}/>
       Name: {data.name}</div>
    )
}

export default GitHub

export const githubInfoLoader = async ()=>{
 const response= await fetch('https://api.github.com/users/Hiteshchoudhary')
 return response.json()
}