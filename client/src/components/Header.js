import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'
import Logo from './Logo'
import Sidebar from './Sidebar'




function Header({user,setUser}) {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light " id="header">
      <div class="container-fluid">
      <Logo className="navbar-brand mx-1"/>
      
      <div className="d-flex flex-reverse ">
          <NavLink exact to='/'className="d-flex btn btn-outline-primary btn-sm fw-bold me-2" >Home</NavLink>
          <NavLink exact to='/new-post-form'className="btn btn-outline-primary btn-sm fw-bold me-2" >Create Post</NavLink>
          <LogoutButton setUser={setUser}/>
          

        {/* <img src="https://i.ibb.co/PNtpmc8/craigsface-1.jpg" alt="craigsface-1" border="0" id="image" /> */}
      </div>
      </div>
    </nav>
  )
}

export default Header