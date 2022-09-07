import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'
import Logo from './Logo'




function Header({setUser}) {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light " id="header">
      <Logo className="navbar-brand mx-1"/>
      <div className="container-fluid">
          <NavLink exact to='/'className="btn btn-outline-primary btn-sm" role="button">Home</NavLink>
          <NavLink exact to='/new-post-form'className="btn btn-outline-primary btn-sm" role="button">Create Post</NavLink>
          <NavLink exact to='/'className="btn btn-outline-primary btn-sm" role="button"><LogoutButton setUser={setUser}/></NavLink>

        {/* <img src="https://i.ibb.co/PNtpmc8/craigsface-1.jpg" alt="craigsface-1" border="0" id="image" /> */}
      </div>
    </nav>
  )
}

export default Header