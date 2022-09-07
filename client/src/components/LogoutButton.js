import React from 'react'

function LogoutButton({setUser}) {

    const handleLogout = () =>{
        fetch('/logout',{method:"DELETE"}).then().then(console.log)
        setUser(null)
    }



  return (
        <div className="btn btn-outline-primary btn-sm fw-bold" onClick={handleLogout}>Logout 	&rarr;</div>
  )
}

export default LogoutButton