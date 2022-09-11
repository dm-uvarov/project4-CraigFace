import React, { useState } from 'react'
import Header from './Header'

function NewPostForm({ addPost, setUser }) {

    const [show, setShow] = useState(false);
    const [badgeCount,setBadgeCount] = useState(0);
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [userImageUrl, setUserImageUrl] = useState('')
    const [price, setPrice] = useState(0)

    const hideAlert = (e) => {setShow(false)}
    const showAlert = (e) => {setShow(true)}

    const badgeCountIncrement = (e) => {
        setBadgeCount(badgeCount + 1)} 

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPost = {
            name: name,
            description: description,
            category: category,
            image_url: userImageUrl,
            price: price
        }
        fetch("/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        }).then(r => r.json())
            .then(d => {
                addPost(d)
                showAlert(e)
                badgeCountIncrement(e)
            })

        e.target.reset()
    }



    return (
        <div>
            <Header setUser={setUser} />

            { show ? <div class="alert alert-info alert-dismissible fade show d-flex my-3" role="alert">
                 <b>New post
                    { badgeCount > 1 ? 
                    <>
                    s<span class="badge text-secondary px-0">({badgeCount})</span>
                    </> : <> </> } added on Home page.</b>
                 <button 
                    onClick={(e=>hideAlert(e))}
                    type="button" 
                    class="btn-close" 
                    data-bs-dismiss="alert" 
                    aria-label="Close">
                    
                </button>
            </div> : <></>}
                {/* <Alert variant="info" >
                    <Alert.Heading>Info</Alert.Heading>
                    <p>
                        Post was added on home page.
                    </p>
                </ Alert> */}

            <div className="create-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3 className='h3'>Enter new post here:</h3>
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={(e) => setName(e.target.value)} type="text" id="signup-username-input" className="form-control" placeholder="Name" />
                        {/* <label className="form-label" htmlFor="signup-username-input">Name</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={(e) => setDescription(e.target.value)} type="text" id="signup-username-input" className="form-control" placeholder="Description" />
                        {/* <label className="form-label" htmlFor="signup-username-input">Description</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={(e) => setCategory(e.target.value)} type="text" id="signup-username-input" className="form-control" placeholder="Category" />
                        {/* <label className="form-label" htmlFor="signup-username-input">Category</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={(e) => setUserImageUrl(e.target.value)} type="text" id="signup-username-input" className="form-control" placeholder="Image" />
                        {/* <label className="form-label" htmlFor="signup-username-input">Image_url</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={(e) => setPrice(e.target.value)} type="text" id="signup-username-input" className="form-control" placeholder="Price" />
                        {/* <label className="form-label" htmlFor="signup-username-input">Price</label> */}
                    </div>
                    <div>
                        <button type="submit" className="btn btn-outline-primary btn-block mb-4">Add Post
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default NewPostForm