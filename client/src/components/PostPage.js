import React,{useState} from 'react'
import { 
    Link,
    useParams
  } from "react-router-dom";
import Sidebar from './Sidebar';
function PostPage ({user,posts,handleDelete,setLikes,likes}) {

    const {id} = useParams()

    console.log(id)
    console.log(posts)


    const post = posts.find(p => p.id === parseInt(id))
    setLikes(post && post.likes)
    console.log(post)
    // let likes = post && post.likes

    const handleLike = () => {
        fetch(`/posts/${post.id}`,{
            method:"PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "likes":likes+1
            })
        }).then(r=>r.json()).then(console.log)
        setLikes(() => likes + 1)

    }


    const handleBuy = () => {
        
        fetch(`/add_total_revenue/${post.user_id}`,{
            method: 'PATCH',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "total_revenue" : post.price
            })
        }).then(r=>r.json()).then(console.log)
        fetch(`/posts/${post.id}`,{method: "DELETE"})
        handleDelete(post)
    }


    return (
        <div className="post-page"> 
         <Link to={"/"} > 
            <label> {`<- back to home`}</label>
        </Link>
            <div>
                <h1> {post && post.name} </h1>
                    <img
                        src={post && post.image_url}
                    />
                    <p>{post && post.description}</p>
                    {post &&
                        <Link to='/'>
                        {user.id != post.user_id ?
                            <button className="Button Success" onClick={handleBuy}>BUY ME</button>: 
                            <button>YOU OWN THIS</button>
                        }
                        </Link> 
                    }
                    <button onClick={()=>handleLike()}>{likes}💟 </button>

            </div>
            <Sidebar user={user}/>
        
        </div>
    )
}





export default PostPage


