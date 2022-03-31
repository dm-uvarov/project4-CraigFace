import React from 'react'

function Post({post}) {

    const imgStyle = {
        height: '250px',
        width: "100%"
    }

    // let pickedPost = post
    // fetch(`/posts/${post.id}`).then(r=>r.json()).then(d => pickedPost=d )

  return (
    <div className="card  mb-2">
        {/* <span className="border border-primary"> */}
            <img
            style={imgStyle}
            className='card-img-top border border-dark'
            src={post.image_url}
            alt='img'
            />
            <div className="card-body">
                    <p className='card-title'>{post.price}</p>
                <p className="card-text">{post.name}</p>
            </div>
        {/* </span> */}
    </div>
  )
}

export default Post