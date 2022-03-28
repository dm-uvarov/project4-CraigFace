import React, {useState, useEffect} from 'react'

import './App.css';
import StartPage from "./StartPage"
import {Route, Switch} from 'react-router-dom'
import Home from "./Home"
import Header from "./Header"
import NewPostForm from './NewPostForm';

function App() {
  const [posts, setPosts] = useState([])



  useEffect(() => {
    fetch("/posts")
      .then(r=>r.json())
      .then(data => setPosts(data))
  }, [])


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

 



  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route path="/">
            <StartPage/>
          </Route>
          <Route>
           <NewPostForm/>
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
