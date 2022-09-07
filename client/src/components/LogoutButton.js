import React from 'react'

function LogoutButton({setUser}) {

    const handleLogout = () =>{
        fetch('/logout',{method:"DELETE"}).then().then(console.log)
        setUser(null)
    }



  return (
        <div onClick={handleLogout}>Logout</div>
  )
}

export default LogoutButton