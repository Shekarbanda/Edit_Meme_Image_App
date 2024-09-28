import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'

export default function Memecard(props) {

  const memes = props.data;
  const nav = useNavigate();
  return (
    <div className='main'>
      {memes.map((d,i)=>{
        return(
        <div key={i} className='card'>
          <img src={d.url} alt='img' height={150} width={200}/>
          <h2>{d.name}</h2>
          <button className='btn' onClick={()=>nav(`/Editpage?url=${d.url}`)}>Edit</button>
        </div>
        )
      })}
    </div>
  
  )
}
