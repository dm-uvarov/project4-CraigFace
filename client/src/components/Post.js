import React from 'react'

function Post({post}) {

    const imgStyle = {
        height: '100%',
        width: "100%"
    }

  return (
    <div className="card  mb-2">
        {/* <span className="border border-primary"> */}
            <img
            style={imgStyle}
            className='card-img-top'
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