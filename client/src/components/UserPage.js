import React from 'react'
import Header from './Header'

function UserPage({user,setUser}) {
    console.log(user)
  return (
    <div>
        <Header setUser={setUser}/>
        <div>
            {user.total_revenue}
        </div>
    </div>
  )
}

export default UserPage