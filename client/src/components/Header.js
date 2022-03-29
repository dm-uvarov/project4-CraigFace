import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'


function Header({setUser}) {
  return (
    
    <nav>
        <NavLink exact to='/'>
            <button>Home</button>
        </NavLink>

        <NavLink to='/new-post-form' >
            <button>Create Post</button>
        </NavLink>
        
        <NavLink to='/'>
          <LogoutButton setUser={setUser}/>
        </NavLink>
    </nav>
  )
}

export default Header