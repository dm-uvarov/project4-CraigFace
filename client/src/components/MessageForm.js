import React, { useState } from 'react'

const MessageForm = ({ addMessage }) => {
  const [content, setContent] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addMessage(content)
    setContent("")
  }

  return (
    <div className="ui secondary segment">
      <form onSubmit={handleSubmit} action="">
        <div className="ui fluid input">
          <input
            onChange={e => setContent(e.target.value)}
            value={content}
            type="text"
          />
          <button className="ui basic blue button" type="submit">
            Send message 
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm