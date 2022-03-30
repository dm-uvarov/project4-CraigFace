import React,{useState} from 'react'
import { 

    Link
  } from "react-router-dom";

function PostPage ({post}) {


    return (
        <div className="post-page"> 
        <label > {post.name} </label>

        <Link to={"/"} > 
            <label> {`<- back to post`}</label>
        </Link>
        </div>
    )
}





export default PostPage


