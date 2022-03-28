import React from 'react'

function Post({post}) {
  return (
    <div className="card">
        {/* <span className="border border-primary"> */}
            <img 
            className='card-img-top'
            src={post.image_url}
            alt='img'
            />
            <div className="card-body">
                <p className="card-text">{post.description}</p>
            </div>
        {/* </span> */}
    </div>
  )
}

export default Post