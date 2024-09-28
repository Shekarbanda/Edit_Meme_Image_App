import React from 'react'
import { useState } from 'react'
import Draggable from 'react-draggable';

export default function Text() {
    const [val,setval]=useState("Double click");
    const [edit,setedit] = useState(false);
  return (
    <Draggable>
    <div>
        {
            edit?<input onDoubleClick={()=>setedit(false)} className='text' type='text' placeholder='Enter text' value={val} onChange={(e)=>setval(e.target.value)} />:
            <h4 onDoubleClick={()=>setedit(true)}>{val}</h4>
        }
        
    </div>
    </Draggable>
  )
}
