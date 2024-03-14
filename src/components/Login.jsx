import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const[userName,SetUserName]=useState("")
    const[password,SetPassword]=useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit= (e)=>{
        e.preventDefault();
        setUser({userName,password})
    }
  return (
    <div>
      <input type="text" 
      value={userName}
      onChange={(e)=>SetUserName(e.target.value)}
      placeholder='userName'
       />
       {" "}
       <input type="password"
       value={password}
       onChange={(e)=>SetPassword(e.target.value)}
       />
       <button
       onClick={handleSubmit}
       >Login</button>
    </div>
  )
}

export default Login
