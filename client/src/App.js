import React, {useState, useEffect} from 'react'

import './App.css';
import StartPage from "./components/StartPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home"
import NewPostForm from './components/NewPostForm';
import PostPage from "./components/PostPage";

function App() {
  const [posts, setPosts] = useState([])
  const [user,setUser] = useState(null)
  const [selectedPost, setSelectedPost] = useState(posts[1])

  useEffect(() => {
    fetch("/posts")
      .then(r=>r.json())
      .then(data => setPosts(data))
  }, [])

  useEffect(() => {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then(setUser)
      }
    })
    // .then(data => setUser(data))
  }, [])




  // useEffect(() => {
  //   fetch('/logged_in')
  //   .then(r=>r.json())
  //   .then(console.log)
  // })
  const handleDelete = (post) => {
    const newPosts = posts.filter((p) => p.id !== post.id)
    setPosts(newPosts)
  }

  const addPost = (post) => {
    const newPosts = [...posts,post]
    setPosts(newPosts)
  }


    


  const createPost = (p) => {
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p)
    })
      .then(r=>r.json())
      .then(newObj => {
        setPosts([...posts, newObj])
      })
  }

  
 if (!(user)) {
   return(
    <Switch>
      <Route path="/">
       <StartPage setUser={setUser}/>
      </Route>
    </Switch>
   )
 }



  return (
    <div className="App">
      
      <div>
        <Switch>

          <Route exact path="/posts/:id">
            <PostPage handleDelete ={handleDelete} user={user} post={selectedPost}/>
          </Route>
          
          <Route path="/new-post-form">
            <NewPostForm addPost={addPost} createPost={createPost}/>
          </Route>
          
          <Route path="/">
            <Home user ={user} setUser={setUser} posts={posts} setSelectedPost={setSelectedPost}/>
          </Route>
          


        </Switch>
      </div>
      
    </div>
  );

  }
export default App
