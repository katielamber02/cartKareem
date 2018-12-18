import React from 'react'

const child=(props)=>{
   return(
     <div>
       <button onClick={props.doSmth}>
        {props.title}
        
       </button>
       <br/>
       {props.newprop}
     </div>
   )

}
export default child