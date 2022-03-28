import React from 'react'
import {NavLink} from 'react-router-dom'
import NewPostForm from './NewPostForm'

function Header() {
  return (
    <div>
        
        <NavLink exact to='/'>
            Signup
        </NavLink>

        <NavLink to='/NewPostForm' >
            New Post
        </NavLink>


    </div>
  )
}

export default Header