import React,{useState} from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import Sidebar from './Sidebar'

function Home({setUser, posts, user, setSelectedPost}) {
  const [filtered, setFiltered] = useState([true])
  // const [filteredPosts, setFilteredPosts] = useState([posts])
  console.log(posts)
  // console.log(filteredPosts)
 
//   function HandleCheckBoxFiltered() {
//   if (filtered) {
//     // console.log(filtered)
//     setFilteredPosts (posts.filter(post => post.user_id === user.id ))
//     // console.log(filteredPosts)
//   }else {
//     setFilteredPosts (posts)
//     // console.log(filteredPosts)
//   }
//     setFiltered(!filtered)
  
//  }
  const filteredPosts = filtered ? posts.filter(post => post.user_id === user.id ):
                                   posts

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
              <input type="checkbox" onClick={toggleMyPosts} checked={filtered}/>
            </label>
          </div>
          <PostContainer posts={filteredPosts} setSelectedPost={setSelectedPost} />
          <Sidebar user={user}/>
        </div>
        
    </div>
  )
}

export default Home