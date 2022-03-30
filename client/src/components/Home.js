import React,{useState} from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import Post from './Post'

function Home({setUser, posts, user, setSelectedPost}) {
  const [filtered, setFiltered] = useState([false])
  const [filteredPosts, setFilteredPosts] = useState(posts)
  
  
 function HandleCheckBoxFiltered() {
  if (filtered) {
    // console.log(filtered)
    setFilteredPosts (posts.filter(post => post.user_id === user.id ))
    // console.log(filteredPosts)
  }else {
    setFilteredPosts (posts)
    // console.log(filteredPosts)
  }
    setFiltered(!filtered)
  
 }


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
              <input type="checkbox" onClick={HandleCheckBoxFiltered}/>
            </label>
          </div>
          <PostContainer posts={filteredPosts} setSelectedPost={setSelectedPost}/>
        </div>
        
    </div>
  )
}

export default Home