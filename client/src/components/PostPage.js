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
        setLikes(() => likes + 1)

    }


    const handleBuy = () => {

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
        <div className="post-page container-fluid">
            <Header setUser={setUser} />

            <div className="container" >
                <div className="card">
                    <div className="row g-0">
                        <div clasName="col-sm-4 position-relative">
                            <img src={post && post.image_url}
                                alt="img"
                                className="card-img fit-over w100 h-100"
                            />
                        </div>
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h3 className="card-title h3">{post && post.name} </h3>
                                <p className="card-text">{post && post.description}</p>
                            </div>
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
                                                <button className="button btn btn-outline-primary btn-sm mx-1" onClick={handleBuy}>BUY ME</button> :
                                                <button className="button btn btn-outline-primary btn-sm mx-1">YOU OWN THIS</button>
                                            }
                                        </Link>
                                    }
                                    <button className="button btn btn-primary btn-sm mx-1" onClick={() => handleLike()}>
                                        <span className="badge text-bg-secondary">{likes} ♡</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <Sidebar user={user} />
        </div >
    )
}





export default PostPage


