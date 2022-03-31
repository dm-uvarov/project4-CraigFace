import React,{useState} from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import Sidebar from './Sidebar'

function Home({setUser, posts, user}) {
  const [filtered, setFiltered] = useState(false)


  const filteredPosts = filtered ? posts.filter(post => post.user_id === user.id ) : posts

  const toggleMyPosts = () => setFiltered (!filtered)

    // console.log(user.id)
  return (
  <div>
        <div>
          <label>
          <Header setUser={setUser}/>
          </label>
          <div className="checkbox-area"> 
            <label > 
              Show only my posts <span/>
              <input type="checkbox" onChange={toggleMyPosts}  />
            </label>
          </div>
          <PostContainer posts={filteredPosts}/>
          <Sidebar user={user}/>
        </div>
        
    </div>
  )
}

export default Home