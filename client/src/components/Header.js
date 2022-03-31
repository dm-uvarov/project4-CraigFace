import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'


function Header({setUser}) {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="btn btn-primary btn-block mb-4">
          <NavLink exact to='/'class="nav-link">Home <span class="sr-only"></span></NavLink>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li class="btn btn-primary btn-block mb-4">
          <NavLink to='/new-post-form'class="nav-link">Create Post <span class="sr-only"></span></NavLink>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li class="btn btn-primary btn-block mb-4">
          <NavLink to='/'class="nav-link"> <LogoutButton setUser={setUser}/> <span class="sr-only"></span></NavLink>
        </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header