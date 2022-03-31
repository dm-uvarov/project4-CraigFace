import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'


function Header({setUser}) {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="btn btn-primary btn-block mb-4">
          <NavLink exact to='/'className="nav-link">Home <span className="sr-only"></span></NavLink>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li className="btn btn-primary btn-block mb-4">
          <NavLink to='/new-post-form'className="nav-link">Create Post <span className="sr-only"></span></NavLink>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li className="btn btn-primary btn-block mb-4">
          <NavLink to='/'className="nav-link"> <LogoutButton setUser={setUser}/> <span className="sr-only"></span></NavLink>
        </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header