import React, {useState, useEffect} from 'react'

import './App.css';
import StartPage from "./StartPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home"
import NewPostForm from './NewPostForm';

function App() {
  const [posts, setPosts] = useState([])
  const [user,setUser] = useState(null)
  

  useEffect(() => {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then(setUser)
      }
    })
    // .then(data => setUser(data))
  }, [])


  useEffect(() => {
    fetch("/posts")
      .then(r=>r.json())
      .then(data => setPosts(data))
  }, [])

  // useEffect(() => {
  //   fetch('/logged_in')
  //   .then(r=>r.json())
  //   .then(console.log)
  // })


    


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
    <Router>
      <div className="App">
        
        <div>
          <Switch>
            <Route path="/new-post-form">
              <NewPostForm createPost={createPost}/>
            </Route>
            <Route path="/">
              <Home setUser={setUser} posts={posts}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
