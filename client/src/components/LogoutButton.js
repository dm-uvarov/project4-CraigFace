import React from 'react'

function LogoutButton({setUser}) {

    const handleLogout = () =>{
        fetch('/logout',{method:"DELETE"})
        setUser(null)
    }



  return (

    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogoutButton