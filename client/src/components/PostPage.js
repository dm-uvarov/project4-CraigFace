import React,{useState} from 'react'
import { 
    Link
  } from "react-router-dom";
import Sidebar from './Sidebar';
function PostPage ({user,post,handleDelete}) {


    const handleBuy = () => {
        fetch(`/posts/${post.id}`,{method: "DELETE"})
        handleDelete(post)
    }
    console.log(post)


    return (
        <div className="post-page"> 
         <Link to={"/"} > 
            <label> {`<- back to home`}</label>
        </Link>
            <div>
                <h1> {post.name} </h1>
                    <img
                        src={post.image_url}
                    />
                    <p>{post.description}</p>
                    <Link to='/'>
                        {user.id != post.user_id ?
                            <button onClick={handleBuy}>BUY ME</button>: 
                            <button>YOU OWN THIS</button>
                        }
                    </Link> 
                    
                    <button>{post.likes}💟 </button>

            </div>
            <Sidebar user={user}/>
        
        </div>
    )
}





export default PostPage


