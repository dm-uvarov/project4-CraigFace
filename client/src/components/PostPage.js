import React, { useState } from 'react'
import {
    Link,
    useParams
} from "react-router-dom";
import Sidebar from './Sidebar';
import Header from './Header';

function PostPage({ user, posts, handleDelete, setLikes, likes, setUser }) {

    const { id } = useParams()

    console.log(id)
    console.log(posts)


    const post = posts.find(p => p.id === parseInt(id))
    setLikes(post && post.likes)
    console.log(post)
    // let likes = post && post.likes

    const handleLike = () => {
        fetch(`/posts/${post.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "likes": likes + 1
            })
        }).then(r => r.json()).then(console.log)
        setLikes((likes) => likes + 1)

    }


    const handleBuy = (e) => {

        fetch(`/add_total_revenue/${post.user_id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "total_revenue": post.price
            })
        }).then(r => r.json()).then(console.log)

        fetch(`/posts/${post.id}`, { method: "DELETE" })
        handleDelete(post)
    }


    return (
        <div className="">
            <Header setUser={setUser} />
            {/* grid starts here */}
            <div className="mx-3 my-3">
                <div className="row gx-3 mr-3">
                    <div className="col-md-3">
                        {/* place for userface */}
                        <Sidebar user={user} />
                    </div>
                    <div className="col-md-9">
                        {/* place for big card */}
                        <div className="card" >
                            <div className="row gx-0 ">
                                <div clasName="col-sm-8 col-md-6 position-relative"
                                style={{maxWidth : "45%"}}>
                                    <img src={post && post.image_url}
                                        alt="img"
                                        className="rounded-start w-100 h-100"
                                        style={{objectFit: "cover",
                                                maxHeight: "20rem"}}
                                    />
                                </div>
                                <div className="col-sm-8 col-md-6">
                                    <div className="card-body">
                                        <h3 className="card-title h3">{post && post.name} </h3>
                                        <p className="card-text">{post && post.description}</p>

                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                Price: <span>${post && post.price}</span>
                                            </li>
                                            <li className="list-group-item">
                                                Post by: <span>{post && post.user.username}</span>
                                            </li>
                                            <li className="list-group-item">
                                                {post &&
                                                    <Link to='/'>
                                                        {user.id !== post.user_id ?
                                                            <button className="button btn btn-outline-primary btn-sm mx-1" onClick={(e)=>handleBuy(e)}>BUY ME</button> :
                                                            <button className="button btn btn-outline-primary btn-sm mx-1">YOU OWN THIS</button>
                                                        }
                                                    </Link>
                                                }
                                                <button className="button btn btn-primary btn-sm mx-1" onClick={(e) => handleLike(e)}>
                                                    <span className="badge text-bg-secondary">{likes} ♡</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}





export default PostPage


