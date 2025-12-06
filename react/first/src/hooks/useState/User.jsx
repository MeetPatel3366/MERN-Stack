import React from 'react'
import { useState } from 'react'

const User = () => {
    const [user,setUser]=useState({name:"meet",address:"india"})

    const handleChangeName=(n)=>{
        setUser((prev)=>{
            return{
                ...prev,
                name:n
            }
        })
    }

  return (
    <div>
      <h1>name: {user.name}</h1>
      <h1>address: {user.address}</h1>
      <button onClick={()=>handleChangeName("vasu")}>Change name</button>
    </div>
  )
}

export default User
