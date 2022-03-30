import React from 'react'

function PostMenu({user,post}){



return(
    <div className="menu-user-container">
        <label>Create post</label>
        <div className="menu-user-conditional">
        {(!!user) ? (
            <div>
                <label> Modify post </label>
                <label> Delete post </label>
            </div>
        ):(<div></div>)
        }


        </div>
    </div>




)
    }

export default PostMenu