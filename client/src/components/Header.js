import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'


function Header({setUser}) {
  return (
    
    <nav className="navbar">
        <NavLink exact to='/'>
            Home
        </NavLink>

        <NavLink to='/new-post-form' >
            Create Post
        </NavLink>
        <NavLink to='/'>
          <LogoutButton setUser={setUser}/>
        </NavLink>
    </nav>
  )
}

export default Header