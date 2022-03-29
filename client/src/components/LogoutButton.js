import React from 'react'

function LogoutButton({setUser}) {

    const handleLogout = () =>{
        fetch('/logout',{method:"DELETE"})
        setUser(null)
    }



  return (
        <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton