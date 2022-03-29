import React from 'react'
import Post from './Post'

function PostContainer({posts}) {


    // // array of N elements, where N is the number of rows needed
    const rows = [...Array( Math.ceil(posts.length / 4) )];
    // // chunk the products into the array of rows
    const productRows = rows.map( (row, idx) => posts.slice(idx * 4, idx * 4 + 4) ) 


  return (
    <div className='container' style={{paddingLeft:"200px"}}>
        {productRows.map((row,indx) => {return(
            <div className='row' key={indx}>
                {row.map(post => { 
                    // console.log(post)
                    return(
                    <div key={post.id} className='col-md-3'>
                        <Post  post={post} key={post.id}/>
                    </div>
                )})}
            </div>
        )})}
    </div>
  )
}

export default PostContainer