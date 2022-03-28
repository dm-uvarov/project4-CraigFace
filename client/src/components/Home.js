import React from 'react'
import Header from './Header'
import PostContainer from './PostContainer'


function Home({setUser, posts}) {
  


    
  return (
  <div>
        <div>
          <Header setUser={setUser}/>Home
          <PostContainer posts={posts}/>
        </div>
        
    </div>
  )
}

export default Home