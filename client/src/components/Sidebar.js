import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar({user}) {
    console.log(user)
  return (
      <div className='sidebar'>
        
        <h5>Welcome {user.username}</h5>
        <Link to='/user-profile'>
          <img src={user.profile_pic} id='profile-pic'></img>
        </Link>
        <h5>Your Total Posts: {user.posts.length}</h5>
        
        <div className='chat-place'> 
        <h5> chat here</h5>
        
        </div>

      </div>
   
  )
}

export default Sidebar