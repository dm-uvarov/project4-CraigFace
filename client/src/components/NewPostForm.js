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
  const [user, setUser] = useState('')
  const [price, setPrice] = useState(0)



  return (
    <div> 
        <Header/>
      <div> 
        <h2>New post here?:</h2>    
      </div>
    <form>
        <div> 
            <label> 
                <div>Name </div>
                <input type="text" placeholder="Name"/>
            </label>
        </div>
        <div> 
            <label> 
                <div>category </div>
                <input type="text"   placeholder="category"/>
            </label>
        </div>
        <div> 
            <label> 
                <div>place Image url here: </div>
                <input type="text"  placeholder="image url"  />
            </label>
        </div>
        <div> 
            <label> 
                <div>price: </div>
                <input type="text"  placeholder="price"  />
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