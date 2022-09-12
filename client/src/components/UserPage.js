import React from 'react'
import Header from './Header'

function UserPage({user,setUser}) {
    console.log(user)
    return (
    // <div className="container rounded bg-white ">
    <div className="bg-white">

            <Header setUser={setUser}/>
        
    <div className="row"
        style={{ backgroundColor: 'lightblue'}}>
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="85%" src={user.profile_pic}/><span className="fw-bold"> {user.username}</span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="text-right h3">Profile Stats</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><b>Total Revenue</b><p>{user.total_revenue}</p></div>
                    <div className="col-md-6"><b>Total Active Post</b><p>{user.posts.length}</p></div>
                </div>
            </div>
        </div>
    </div>
    </div>
// </div>
    )
}
export default UserPage