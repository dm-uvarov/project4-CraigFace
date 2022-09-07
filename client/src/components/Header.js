import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'
import Logo from './Logo'




function Header({setUser}) {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
      <div className="container-fluid"></div>
      <Logo className="navbar-brand mb-0"/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto ">
        <li className="btn btn-primary btn-small mb-4">
          <NavLink exact to='/'className="nav-link">Home <span className="sr-only"></span></NavLink>
        </li>
        <li className="btn btn-primary btn-block mb-4">
          <NavLink to='/new-post-form'className="nav-link">Create Post <span className="sr-only"></span></NavLink>
        </li>
      
        <li className="btn btn-primary btn-block mb-4">
          <NavLink to='/'className="nav-link"> <LogoutButton setUser={setUser}/> <span className="sr-only"></span></NavLink>
        </li>
        </ul>

        {/* <img src="https://i.ibb.co/PNtpmc8/craigsface-1.jpg" alt="craigsface-1" border="0" id="image" /> */}
      </div>
    </nav>
  )
}

export default Header