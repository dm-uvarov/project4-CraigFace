import React from 'react'
import Post from './Post'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

const url = 'http://localhost:4000/'
function PostContainer({ posts, setSelectedPost, setIsLoggedIn, navigate }) {


    // // array of N elements, where N is the number of rows neede
    console.log(posts)
    // if(posts.errors){

    // }
    const rows = [...Array(Math.ceil(posts.length / 3))];
    // // chunk the products into the array of rows
    const productRows = rows.map((row, idx) => posts.slice(idx * 3, idx * 3 + 3))
    // debugger 

    return (
        <div className='' >
            {productRows.map((row, indx) => {
                return (
                    <div className='row' key={indx}>
                        {row.map(post => {
                            // console.log(post)
                            return (
                                <div key={post.id} className='col-md-4 '>
                                    <Link to={`/posts/${post.id}`}
                                        style={{textDecoration: 'none'}}
                                        >
                                        <Post post={post} key={post.id} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })}

            {/* <Switch>
            <Route path={`/posts/:1`}>
                <Post post={posts[1]}/>
            </Route>
        </Switch> */}

        </div>
    )
}

export default PostContainer