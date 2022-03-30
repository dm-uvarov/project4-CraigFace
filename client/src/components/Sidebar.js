import React from 'react'

function Sidebar({user}) {
    
  return (
      <div className='sidebar'>
        
        <h5>Welcome {user.username}</h5>
        <img src={user.profile_pic} id='profile-pic'></img>
        <h5>Your Total Posts: {user.posts.length}</h5>
        

      </div>
   
  )
}

export default Sidebar