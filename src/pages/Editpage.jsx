import React from 'react'
import { useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import Text from '../components/Text';
import { useRef } from 'react';
import {exportComponentAsJPEG} from 'react-component-export-image';

export default function Editpage() {
    const [params] = useSearchParams();
    const [count,setcount] = useState([]);

    const ref = useRef();

    const url =params.get('url');

  return (
    <div>
        <h1>Edit Meme</h1>
        <div ref={ref} className='meme'>
        <img src={url} alt='img' height={400} width={400}/>
        {
            count.map((d,i)=>{
                return(
                <Text key={i}></Text>
                )
            })
        }
        </div>
        <button onClick={()=>setcount([...count,'anu'])}>Add Text</button>
        <button onClick={()=>exportComponentAsJPEG(ref)}>Save</button>
    </div>
  )
}
