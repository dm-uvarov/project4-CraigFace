import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar({user}) {
    console.log(user)
  return (
      <div className='sidebar rounded'
      style={{maxHeight: "20rem"}}>
        
        <h4 className='h4 fw-bold' >Welcome, {user.username}</h4>
        {/* <Link to='/user-profile'> */}
          <img src={user.profile_pic} id='profile-pic'></img>
        {/* </Link> */}
        <h5 className='h5 fw-bold'>Posts: {user.posts.length}</h5>
        <h5 className='h5 fw-bold'>Revenue: ${user.total_revenue}</h5>
        
        {/* <div className='chat-place'> 
        <h5> chat here</h5>
        
        </div> */}

      </div>
   
  )
}

export default Sidebar