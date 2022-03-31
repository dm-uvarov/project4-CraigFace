import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar({user}) {
    
  return (
      <div className='sidebar'>
        
        <h5>Welcome {user.username}</h5>
        <Link to='/user-profile'>
          <img src={user.profile_pic} id='profile-pic'></img>
        </Link>
        <h5>Your Total Posts: {user.posts.length}</h5>
        

      </div>
   
  )
}

export default Sidebar