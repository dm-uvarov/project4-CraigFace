import React from 'react'

function Post({post}) {

    const imgStyle = {
        width: "100%",
        height: '12rem',
        objectFit: "cover", 
        maxHeight: '12rem'}
    

  return (
    <div className="card mb-3"
        style= {{maxHeight:'18rem'}}>
        {/* <span className="border border-primary"> */}
            <img
            style={imgStyle}
            className='card-img-top'
            src={post.image_url}
            alt='img'
            />
            <div className="card-body">
                <p className="card-text small-desc"
                style={{ textDecoration: 'none',
                color: 'black' }}>
                {post.name} - ${post.price}</p>
            </div>
        {/* </span> */}
    </div>
  )
}

export default Post