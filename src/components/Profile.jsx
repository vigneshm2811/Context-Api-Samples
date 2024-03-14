import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user}=useContext(UserContext)
  if(!user){
  return(
    <div>
    User not found
  </div>
  )
  }
  return (
    <div>
      Profile:{user.userName}
    </div>
  )
}

export default Profile
