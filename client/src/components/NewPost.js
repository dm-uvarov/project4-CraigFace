import React from 'react'
import {useState} from 'react'

// t.string "category"
//     t.string "image_url"
//     t.bigint "user_id", null: false
//     t.integer "price"

function NewPost({createPost}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [user, setUser] = useState('')
  const [price, setPrice] = useState(0)



  return (
    <div className='form'>
        
        Form</div>
  )
}

export default NewPost