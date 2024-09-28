import React from 'react'
import Memecard from '../components/Memecard'
import getmemes from '../Memeapi'
import { useState } from 'react'
import { useEffect } from 'react';


export default function Home() {

const [data,setdata]=useState([]);

useEffect(()=>{
    getmemes().then((d)=>setdata(d.data.memes))
},[]) 

  return (
    <div>
        <Memecard data={data}></Memecard>

    </div>
  )
}
