import React from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from './LogoutButton'
import NewPostForm from './NewPostForm'

function Header() {
  return (
    
    <nav>
        <NavLink exact to='/'>
            <button>Home</button>
        </NavLink>

        <NavLink to='/new-post-form' >
            <button>Create Post</button>
        </NavLink>
    </nav>
  )
}

export default Header