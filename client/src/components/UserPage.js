import React from 'react'
import Header from './Header'

function UserPage({user,setUser}) {
    console.log(user)
    return (
    <div className="container rounded bg-white mt-5 mb-5">
        <label>
            <Header setUser={setUser}/>
        </label>
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src={user.profile_pic}/><span className="font-weight-bold">Welcome {user.username}</span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Stats</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Total Revenue</label><p>{user.total_revenue}</p></div>
                    <div className="col-md-6"><label className="labels">Total Active Post</label><p>{user.posts.length}</p></div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default UserPage