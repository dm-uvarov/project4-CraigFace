import React from 'react'
import Post from './Post'
import { 
  Switch,
  Route,
  Link
} from "react-router-dom";

const url = 'http://localhost:4000/'
function PostContainer({posts, setSelectedPost}) {


    // // array of N elements, where N is the number of rows neede
    console.log(posts)
    const rows = [...Array( Math.ceil(posts.length / 4) )];
    // // chunk the products into the array of rows
    const productRows = rows.map( (row, idx) => posts.slice(idx * 4, idx * 4 + 4) ) 
    // debugger 

    


  return (
    <div className='container' style={{paddingLeft:"200px"}}>
        {productRows.map((row,indx) => {return(
            <div className='row' key={indx}>
                {row.map(post => { 
                    // console.log(post)
                    return(
                    <div  key={post.id} className='col-md-3'>
                        <Link to={`/posts/${post.id}`}>
                            <Post  post={post} key={post.id} setSelectedPost={setSelectedPost}/>
                        </Link>
                    </div>
                )})}
            </div>
        )})}

        {/* <Switch>
            <Route path={`/posts/:1`}>
                <Post post={posts[1]}/>
            </Route>
        </Switch> */}

    </div>
  )
}

export default PostContainer