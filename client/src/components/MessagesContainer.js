import React, { useReducer, useEffect } from 'react'
import MessageItem from './MessageItem'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import { getUsers } from '../api'
import consumer from '../cable'

import { getMessages, createMessage } from '../api'


// state & reducer for useReducer
const initialState = {
  users: [],
  selectedUsername: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users,
        selectedUsername: action.payload.selectedUsername
      }
    case "SET_SELECTED_USERNAME":
      return {
        ...state,
        selectedUsername: action.payload
      }
    case "UPDATED_USER":
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return action.payload
          } else {
            return user
          }
        })
      }
    default:
      return state
  }
}

const MessagesContainer = ({ currentUser }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { users, selectedUsername } = state

  console.log(users)

  useEffect(() => {
    const subscription = consumer.subscriptions.create({
      channel: "UserChannel"
    }, {
      received: user => {
        console.log("received from UserChannel", user)
        dispatch({
          type: "UPDATED_USER",
          payload: user
        })
      },
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // fetch users
  useEffect(() => {
    getUsers().then(users => {
      dispatch({
        type: "SET_USERS", payload: {
          users,
          selectedUsername: users[0].username
        }
      })
    })
  }, [])

  const handleUserClick = username => dispatch({ type: "SET_SELECTED_USERNAME", payload: username })

  const selectedUser = users.find(user => user.username === selectedUsername)

  if (!selectedUser) return <div>loads</div>

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="ten wide column">
          {selectedUser && <MessageList user={selectedUser} currentUser={currentUser} />}
        </div>
      </div>
    </div>
  )

}

export default MessagesContainer