import React from 'react'
import Header from './Header'
import NewPostForm from './NewPostForm'
import LogoutButton from './LogoutButton'


function Home({setUser, posts}) {
  


    
  return (
  <div>
        <div>
          <Header />Home
          <LogoutButton setUser={setUser}/>
        </div>
        <div>
           {posts}
        </div>
    </div>
  )
}

export default Home