import React from 'react'
import Child from './child'

const parent=(props)=>{
  return(
    <div>
      <Child doSmth={props.doSmth1} title={props.title1}/>
      <Child doSmth={props.doSmth2} title={props.title2}/>
    </div>

  )
}
export default parent