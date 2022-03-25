import React, {useState, useEffect} from 'react'
import NewPost from './NewPost';
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

     = (p) => {
    fetch('/login', {
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
      <Switch>
        <Route>
          <NewPost createPost={createPost} />
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
