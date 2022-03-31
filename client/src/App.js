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
import UserPage from './components/UserPage';

function App() {


  const [posts, setPosts] = useState([])
  const [user,setUser] = useState(null)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [likes,setLikes] = useState(0)


  useEffect(() => {
    fetch("/posts")
      .then(r=>{
        if(r.ok){
          r.json().then(data => setPosts(data))
        }else{
          r.json().then(console.log)
        }
      })
  }, [likes,isLoggedIn])

  useEffect(
    () => 
  {
    fetch("/me").then(r => {
      if (r.ok){
        r.json()
        .then((user) => { 
          setIsLoggedIn(true)
          setUser(user)
        })
      }
    })
  }
  , [])



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

  
 if ((!(user))) {
   return(
    <Switch>
      <Route path="/">
       <StartPage setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      </Route>
    </Switch>
   )
 }



  return (
    <div className="App">
      
      <div>
        <Switch>
          <Route path="/user-profile">
            <UserPage user={user} setUser={setUser}/>
          </Route>

          <Route exact path="/posts/:id">
            <PostPage handleDelete ={handleDelete} user={user} posts={posts} setLikes={setLikes} likes={likes}/>
          </Route>
          
          <Route path="/new-post-form">
            <NewPostForm addPost={addPost} createPost={createPost} setUser={setUser}/>
          </Route>
          
          <Route path="/">
            <Home user ={user} setUser={setUser} posts={posts} setIsLoggedIn={setIsLoggedIn}/>
          </Route>

        

          


        </Switch>
      </div>
      
    </div>
  );

  }
export default App
