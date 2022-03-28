import React from 'react'
import {NavLink} from 'react-router-dom'
import NewPostForm from './NewPostForm'

function Header() {
  return (
    <nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/startpage'>Login</NavLink>
        <NavLink to='/new-post-form'>Create Post</NavLink>
    </nav>
  )
}

export default Header