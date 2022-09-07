import React from 'react'

const MessageItem = ({ user, message }) => (
  <div className="event">
    <div className="label">
      {/* <img alt={username} src={photo} /> */}
    </div> 
    <div className="content">
      <div className="summary">
        {user.username}
        <div className="date">
          {message.created_at}
        </div>
      </div>
      <div className="extra text">
        {message.content}
      </div>
    </div>
  </div>
)

export default MessageItem