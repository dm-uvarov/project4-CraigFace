import React, { useState, useEffect } from 'react'
import MessageItem from './MessageItem'

import MessageForm from './MessageForm'

import { getMessages, createMessage } from '../api'

import consumer from '../cable'

console.log(consumer)

const MessageList = ({ user, currentUser }) => {
  const [messages, setMessages] = useState({
    chat: [],
    newMessages: []
  })

  useEffect(() => {
    if (user.username) {
      console.log("subscribe to", user.username)
      const subscription = consumer.subscriptions.create({
        channel: "ChatChannel",
        username: user.username,
        hi: "there"
      }, {
        connected: () => console.log("connected"),
        disconnected: () => console.log("disconnected"),
        received: message => {
          console.log("received", message)
          setMessages(messages => ({
            ...messages,
            newMessages: [messages, ...messages.newMessages]
          }))
        },
      })

      return () => {
        console.log("unsubscribe from", user.username)
        subscription.unsubscribe()
      }
    }
  }, [user.username])

  useEffect(() => {
    if (user.id) {
      getMessages(user.id).then(messages => {
        setMessages({
          chat: messages,
          newMessages: []
        })
      })
    }
  }, [user.id])

  const addMessage = content => {
    createMessage(currentUser.id, content)
    // .then(message => {
    //   setMessages(messages => ({
    //     ...messages,
    //     newMessages: [message, ...messages.newMessages]
    //   }))
    // })
  }

//   const updateMessages = () => {
//     setMessages(messages => ({
//       chat: [...messages.newMessages, ...messages.feed],
//       newTweets: []
//     }))
//   }

  return (
    <div className="ui segment">
      {currentUser?.id === user.id && (
        <MessageForm addMessage={addMessage} />
      )}
      <div className="ui chat">
        {messages.chat.map(message =>
          <MessageItem
            key={message.id}
            username={user.username}
            message={message}
          />)}
      </div>
    </div>
  )
}

export default MessageList
