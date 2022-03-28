import React from 'react'
import Post from './Post'

function PostContainer({posts}) {

  return (
    <div className='container'>
        <div className='row'>
                {posts.map(p => {return(
                    <div key={p.id} className='col'>
                        <Post key={p.id} post={p}/>
                    </div>
                )})}
        </div>
    </div>
  )
}

export default PostContainer