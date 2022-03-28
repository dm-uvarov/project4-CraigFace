import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        
        <NavLink exact to='/'>
            Signup
        </NavLink>

        <NavLink to='/NewPostForm' >
            New Post
        </NavLink>

        <NavLink>

        </NavLink>


    </div>
  )
}

export default Header