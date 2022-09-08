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

            <div className="card container-fluid" style={{ width: `24rem` }}>
                <img src={post && post.image_url}
                    alt="img"
                    className="card-img-top"
                    style={{ width: '100%' }}
                />
                <div className="card-body">
                    <h4 className="card-title">{post && post.name} </h4>
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
                            <span class="badge text-bg-secondary">{likes} ♡</span>
                        </button>
                    </li>
                </ul>
            </div>



            <div >
                <img
                    src={post && post.image_url} alt={post && post.name}
                />
                <h1> {post && post.name} </h1>

                <p>{post && post.description}</p>
                {post &&
                    <Link to='/'>
                        {user.id !== post.user_id ?
                            <button className="button btn btn-outline-primary" onClick={handleBuy}>BUY ME</button> :
                            <button>YOU OWN THIS</button>
                        }
                    </Link>
                }
                <button onClick={() => handleLike()}>{likes}💟 </button>

            </div>
            <Sidebar user={user} />

        </div>
    )
}





export default PostPage


