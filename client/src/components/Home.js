import React,{useState} from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import Sidebar from './Sidebar'

function Home({setUser, posts, user, setSelectedPost}) {
  const [filtered, setFiltered] = useState(false)


  const filteredPosts = filtered ? posts.filter(post => post.user_id === user.id ) : posts

  const toggleMyPosts = () => setFiltered (!filtered)

    // console.log(user.id)
  return (
  <div>
        <div>
          <label> Welcome to CraigFace, {user.username}
          <Header setUser={setUser}/>
          </label>
          <div className="checkbox-area"> 
            <label > 
              Show only my posts <span/>
              <input type="checkbox" onChange={toggleMyPosts}  />
            </label>
          </div>
          <PostContainer posts={filteredPosts} setSelectedPost={setSelectedPost}/>
          <Sidebar user={user}/>
        </div>
        
    </div>
  )
}

export default Home