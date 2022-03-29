import React from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import Post from './Post'

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