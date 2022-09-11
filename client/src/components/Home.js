import React, { useState } from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import Sidebar from './Sidebar'

function Home({ setUser, posts, user, setIsLoggedIn }) {
  const [filtered, setFiltered] = useState(false)


  const filteredPosts = filtered ? posts.filter(post => post.user_id === user.id) : posts

  const toggleMyPosts = () => setFiltered(!filtered)

  // console.log(user.id)
  return (
    <div>
      

        <Header setUser={setUser} user={user} />
        <div className="d-flex justify-content-end mx-2">

        <div className="btn-group my-2 d-inline-flex " role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" onChange={toggleMyPosts} />
            <label className="btn btn-outline-primary btn-sm " for="btncheck1">Show only my posts</label>
        </div>
      </div>
      <PostContainer posts={filteredPosts} setIsLoggedIn={setIsLoggedIn}  />
      <Sidebar user={user} />
    </div>

    
  )
}

export default Home