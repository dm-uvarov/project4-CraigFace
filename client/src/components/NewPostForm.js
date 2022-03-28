import React from 'react'
import {useState} from 'react'
import Header from './Header'

// t.string "category"
//     t.string "image_url"
//     t.bigint "user_id", null: false
//     t.integer "price"

function NewPostForm({createPost}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [userImageUrl, setUserImageUrl] = useState('')
  const [price, setPrice] = useState(0)

  const handleSubmit = (e) => {
      e.preventDefault()
      const newPost = {
          name: name,
          description: description,
          category: category,
          image_url:userImageUrl,
          price: price
        }
        fetch("/posts",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newPost)
        }).then(r=>r.json()).then(console.log)
  }



  return (
    <div> 
        <Header/>
      <div> 
        <h2>New post here?:</h2>    
      </div>
    <form onSubmit={handleSubmit}>
        <div> 
            <label> 
                <div>Name </div>
                <input onChange={e => setName(e.target.value)} type="text" placeholder="Name"/>
            </label>
        </div>
        <label> 
                <div>Description </div>
                <input onChange={e => setDescription(e.target.value)} type="text" placeholder="Description"/>
            </label>
        <div> 
            <label> 
                <div>category </div>
                <input onChange={e => setCategory(e.target.value)} type="text"   placeholder="category"/>
            </label>
        </div>
        <div> 
            <label> 
                <div>place Image url here: </div>
                <input onChange={e => setUserImageUrl(e.target.value)} type="text"  placeholder="image url"  />
            </label>
        </div>
        <div> 
            <label> 
                <div>price: </div>
                <input onChange={e => setPrice(e.target.value)} type="number"  placeholder="price"  />
            </label>
        </div>
        <div>
            <button type="submit">signup</button>
        </div>
    </form>
    
 </div>





  )
}

export default NewPostForm