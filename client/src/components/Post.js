import React from 'react'

function Post({post, setSelectedPost}) {
    console.log(post)

    const imgStyle = {
        height: '250px',
        width: "100%"
    }

  return (
    <div  onClick={()=>setSelectedPost(post)} className="card  mb-2">
        {/* <span className="border border-primary"> */}
            <img
            style={imgStyle}
            className='card-img-top border border-dark'
            src={post.image_url}
            alt='img'
            />
            <div className="card-body">
                    <p className='card-title'>{post.price}</p>
                <p className="card-text">{post.description}</p>
            </div>
        {/* </span> */}
    </div>
  )
}

export default Post