import React from 'react'

const Event = () => {

  const shoot=(a,b)=>{
    alert(a)
    console.log(b);
  }
  return (
    <div>
      <button onClick={(e)=>shoot("Goal!",e)}>click me</button>
    </div>
  )
}

export default Event
