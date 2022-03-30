import React from 'react'

function LogoutButton({setUser}) {

    const handleLogout = () =>{
        fetch('/logout',{method:"DELETE"})
        setUser(null)
    }



  return (
        <label onClick={handleLogout}>Logout</label>
  )
}

export default LogoutButton