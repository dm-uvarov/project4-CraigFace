const BASE_URL = "http://localhost:3000"

// index back-end route that should return users and their messages
export const getUsers = () => {
    return fetch(BASE_URL + "/users")
      .then(r => r.json())
  }

export const getMessages = userId => {
  return fetch(BASE_URL + `/users/${userId}/messages`)
    .then(r => r.json())
}

export const createMessage = (userId, content) => {
  return fetch(BASE_URL + `/users/${userId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content })
  })
    .then(r => r.json())
}